const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const AxeBuilder = require("@axe-core/webdriverjs");

// Rules the page breaks on purpose
const KNOWN_ISSUES = ["image-alt", "label", "select-name", "button-name", "link-name", "aria-roles", "heading-order"];

describe("Check accessibility", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function scan() {
        // Checks only the part of the page with the examples
        const results = await new AxeBuilder(driver).include("#widgets").analyze();
        return results.violations.map((violation) => violation.id);
    }

    it("the page has the known issues", async function () {
        await driver.get("https://the-internet.herokuapp.com/accessibility_issues");

        const issues = await scan();
        for (const issue of KNOWN_ISSUES) {
            assert.ok(issues.includes(issue), `${issue} was not reported`);
        }
    });

    it("the fixed page has no issues", async function () {
        await driver.get("https://the-internet.herokuapp.com/accessibility_issues?fixed=true");

        assert.deepEqual(await scan(), []);
    });
});
