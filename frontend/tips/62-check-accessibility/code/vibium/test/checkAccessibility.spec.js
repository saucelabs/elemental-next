const assert = require('assert');
const axe = require('axe-core');
const {browser} = require('vibium');

// Rules the page breaks on purpose
const KNOWN_ISSUES = ['image-alt', 'label', 'select-name', 'button-name', 'link-name', 'aria-roles', 'heading-order'];

describe('Check accessibility', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    async function scan() {
        // Adds axe-core to the page, then runs it there on the part of the page with the examples
        await page.evaluate(axe.source);
        const results = await page.evaluate('axe.run("#widgets")');
        return results.violations.map((violation) => violation.id);
    }

    it('the page has the known issues', async function () {
        await page.go('https://the-internet.herokuapp.com/accessibility_issues');

        const issues = await scan();
        for (const issue of KNOWN_ISSUES) {
            assert.ok(issues.includes(issue), `${issue} was not reported`);
        }
    });

    it('the fixed page has no issues', async function () {
        await page.go('https://the-internet.herokuapp.com/accessibility_issues?fixed=true');

        assert.deepEqual(await scan(), []);
    });
});
