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

// The tabs of a tip load their content after the page loads. Waits until every visible tab has its content.
async function waitForTabContent(driver) {
    await driver.wait(() => driver.executeScript(`
        const panels = [...document.querySelectorAll('[role="tabpanel"]:not([hidden])')]
            .filter((panel) => panel.parentElement.closest('[hidden]') === null);
        return panels.length > 0
            && panels.every((panel) => panel.children.length > 0 && panel.textContent.trim() !== 'Loading...');`), 10000);
}

// Tips with tabs render them after the page loads
async function waitForTabs(driver, path) {
    if (!/^\/tips\/\d+-/.test(path)) {
        return;
    }
    try {
        await driver.wait(until.elementLocated(By.css('[role="tab"]')), 5000);
    } catch {
        return; // This tip has no tabs
    }
    await waitForTabContent(driver);
}

// Clicks each tab of the tab list and checks its content. When a tab has tabs inside (e.g., the languages of a tool),
// those are checked too. The tabs selected when the page loads were already checked with the full page.
async function checkTabs(driver, theme, path, tablist, prefix = '') {
    for (const tab of await tablist.findElements(By.xpath('./*[@role="tab"]'))) {
        const name = prefix + await tab.getText();
        if (await tab.getAttribute('aria-selected') !== 'true') {
            await driver.executeScript('arguments[0].click()', tab);
            await driver.wait(async () => await tab.getAttribute('aria-selected') === 'true', 5000);
            await waitForTabContent(driver);
            const results = await new AxeBuilder(driver)
                .include('[role="tabpanel"]:not([hidden])')
                .withTags(tags)
                .analyze();
            report(results, theme, `${path} (${name})`);
        }
        const panel = await tablist.findElement(
            By.xpath('following-sibling::div/div[@role="tabpanel" and not(@hidden)]'));
        const inner = await panel.findElements(By.css('[role="tablist"]'));
        if (inner.length > 0) {
            await checkTabs(driver, theme, path, inner[0], `${name} / `);
        }
    }
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
                // Each tab shows different code, so the other tabs are checked too (only the tab content)
                const tablists = await driver.findElements(By.css('[role="tablist"]'));
                if (tablists.length > 0) {
                    await checkTabs(driver, theme, path, tablists[0]);
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
