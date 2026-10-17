// Checks the pages of the site with axe (WCAG 2.2 A and AA rules), in light and dark mode.
// Usage: npm run build && npm run serve, then, in another terminal: npm run test:a11y
// BASE_URL changes the site to check (default: http://localhost:3000).
import fs from 'node:fs';
import {Builder, By, until} from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';
import AxeBuilder from '@axe-core/webdriverjs';

const baseUrl = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// Every page in the sitemap. Tag pages all use the same template, so only the first one is checked.
function pages() {
    const sitemap = fs.readFileSync(new URL('../build/sitemap.xml', import.meta.url), 'utf8');
    const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
    const tagPages = paths.filter((path) => /^\/tips\/tags\/.+/.test(path));
    return [...paths.filter((path) => !tagPages.includes(path)), tagPages[0], '/does-not-exist'];
}

// The language tabs of a tip load their content after the page loads. Waits until the visible tab has its content.
async function waitForTabContent(driver) {
    await driver.wait(() => driver.executeScript(`
        const panel = document.querySelector('[role="tabpanel"]:not([hidden])');
        return panel !== null && panel.children.length > 0 && panel.textContent.trim() !== 'Loading...';`), 10000);
}

// Tips with language tabs render them after the page loads
async function waitForTabs(driver, path) {
    if (!/^\/tips\/\d+-/.test(path)) {
        return;
    }
    try {
        await driver.wait(until.elementLocated(By.css('[role="tab"]')), 5000);
    } catch {
        return; // This tip has no language tabs
    }
    await waitForTabContent(driver);
}

function report(results, theme, path) {
    for (const violation of results.violations) {
        failures++;
        console.log(`\n[${theme}] ${path}: ${violation.id} (${violation.impact}) ${violation.help}`);
        console.log(`  ${violation.helpUrl}`);
        for (const node of violation.nodes.slice(0, 5)) {
            console.log(`  - ${node.target.join(' ')}`);
        }
    }
}

const options = new firefox.Options().addArguments('-headless');
let failures = 0;

async function checkTheme(theme) {
    const driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    try {
        await driver.get(baseUrl);
        await driver.executeScript(`localStorage.setItem('theme', '${theme}')`);
        for (const path of pages()) {
            try {
                await driver.get(baseUrl + path);
                await waitForTabs(driver, path);
                // A page that fails at runtime shows the error page instead, which has no accessibility problems
                const crashed = await driver.executeScript(
                    "return document.body.innerText.includes('This page crashed')");
                if (crashed) {
                    throw new Error('the page crashed');
                }
                report(await new AxeBuilder(driver).withTags(tags).analyze(), theme, path);
                // Each language tab shows different code, so the other tabs are checked too (only the tab content)
                for (const tab of await driver.findElements(By.css('[role="tab"]'))) {
                    if (await tab.getAttribute('aria-selected') === 'true') {
                        continue;
                    }
                    const language = await tab.getText();
                    await driver.executeScript('arguments[0].click()', tab);
                    await driver.wait(async () => await tab.getAttribute('aria-selected') === 'true', 5000);
                    await waitForTabContent(driver);
                    const results = await new AxeBuilder(driver)
                        .include('[role="tabpanel"]:not([hidden])')
                        .withTags(tags)
                        .analyze();
                    report(results, theme, `${path} (${language})`);
                }
            } catch (error) {
                failures++;
                console.log(`\n[${theme}] ${path}: could not check the page (${error.name}: ${error.message})`);
            }
        }
        console.log(`Checked ${pages().length} pages in ${theme} mode`);
    } finally {
        await driver.quit();
    }
}

// Light and dark mode run at the same time, each in its own browser
await Promise.all([checkTheme('light'), checkTheme('dark')]);

if (failures > 0) {
    console.log(`\n${failures} accessibility problems found`);
    process.exit(1);
}
console.log('No accessibility problems found');
