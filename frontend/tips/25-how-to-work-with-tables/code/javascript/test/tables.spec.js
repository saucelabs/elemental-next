const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Tables", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/tables");
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function texts(locator) {
        const elements = await driver.findElements(By.css(locator));
        return Promise.all(elements.map((element) => element.getText()));
    }

    async function dues(locator) {
        return (await texts(locator)).map((due) => parseFloat(due.replace("$", "")));
    }

    it("sorts a number column in ascending order", async function () {
        await driver.findElement(By.css("#table1 thead tr th:nth-of-type(4)")).click();
        const dueValues = await dues("#table1 tbody tr td:nth-of-type(4)");
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });

    it("sorts a number column in descending order", async function () {
        await driver.findElement(By.css("#table1 thead tr th:nth-of-type(4)")).click();
        await driver.findElement(By.css("#table1 thead tr th:nth-of-type(4)")).click();
        const dueValues = await dues("#table1 tbody tr td:nth-of-type(4)");
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => b - a));
    });

    it("sorts a text column in ascending order", async function () {
        await driver.findElement(By.css("#table1 thead tr th:nth-of-type(3)")).click();
        const emails = await texts("#table1 tbody tr td:nth-of-type(3)");
        assert.deepStrictEqual(emails, [...emails].sort());
    });

    it("sorts a number column in ascending order with semantic locators", async function () {
        await driver.findElement(By.css("#table2 thead .dues")).click();
        const dueValues = await dues("#table2 tbody .dues");
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });
});
