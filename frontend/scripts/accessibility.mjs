// Checks the pages of the site with axe (WCAG 2.2 A and AA rules), in light and dark mode.
// Usage: npm run build && npm run serve, then, in another terminal: npm run test:a11y
// BASE_URL changes the site to check (default: http://localhost:3000).
import fs from 'node:fs';
import {Builder} from 'selenium-webdriver';
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

const options = new firefox.Options().addArguments('-headless');
const driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
let failures = 0;
try {
    for (const theme of ['light', 'dark']) {
        await driver.get(baseUrl);
        await driver.executeScript(`localStorage.setItem('theme', '${theme}')`);
        for (const path of pages()) {
            await driver.get(baseUrl + path);
            const results = await new AxeBuilder(driver).withTags(tags).analyze();
            for (const violation of results.violations) {
                failures++;
                console.log(`\n[${theme}] ${path}: ${violation.id} (${violation.impact}) ${violation.help}`);
                console.log(`  ${violation.helpUrl}`);
                for (const node of violation.nodes.slice(0, 5)) {
                    console.log(`  - ${node.target.join(' ')}`);
                }
            }
        }
        console.log(`Checked ${pages().length} pages in ${theme} mode`);
    }
} finally {
    await driver.quit();
}

if (failures > 0) {
    console.log(`\n${failures} accessibility problems found`);
    process.exit(1);
}
console.log('No accessibility problems found');
