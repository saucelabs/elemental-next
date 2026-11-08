import {test, expect, Page} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Rules the page breaks on purpose
const KNOWN_ISSUES = ['image-alt', 'label', 'select-name', 'button-name', 'link-name', 'aria-roles', 'heading-order'];

async function scan(page: Page) {
    // Checks only the part of the page with the examples
    const results = await new AxeBuilder({page}).include('#widgets').analyze();
    return results.violations.map((violation) => violation.id);
}

test('the page has the known issues', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/accessibility_issues');

    expect(await scan(page)).toEqual(expect.arrayContaining(KNOWN_ISSUES));
});

test('the fixed page has no issues', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/accessibility_issues?fixed=true');

    expect(await scan(page)).toEqual([]);
});
