import {browser, expect} from '@wdio/globals';
import axe from 'axe-core';

// Rules the page breaks on purpose
const KNOWN_ISSUES = ['image-alt', 'label', 'select-name', 'button-name', 'link-name', 'aria-roles', 'heading-order'];

async function scan() {
    // Adds axe-core to the page, then runs it there on the part of the page with the examples
    await browser.execute(axe.source);
    const results: axe.AxeResults = await browser.execute('return axe.run("#widgets")');
    return results.violations.map((violation) => violation.id);
}

describe('Check accessibility', () => {
    it('the page has the known issues', async () => {
        await browser.url('https://the-internet.herokuapp.com/accessibility_issues');

        expect(await scan()).toEqual(expect.arrayContaining(KNOWN_ISSUES));
    });

    it('the fixed page has no issues', async () => {
        await browser.url('https://the-internet.herokuapp.com/accessibility_issues?fixed=true');

        expect(await scan()).toEqual([]);
    });
});
