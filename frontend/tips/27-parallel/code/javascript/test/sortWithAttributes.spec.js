const assert = require("assert");
const {By} = require("selenium-webdriver");

describe("Sort Data Table With Attributes", function () {
    async function dues(driver) {
        const cells = await driver.findElements(By.css("#table2 tbody .dues"));
        return Promise.all(cells.map(async (cell) => parseFloat((await cell.getText()).replace("$", ""))));
    }

    it("in ascending order", async function () {
        await this.driver.findElement(By.css("#table2 thead .dues")).click();
        const dueValues = await dues(this.driver);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });

    it("in descending order", async function () {
        await this.driver.findElement(By.css("#table2 thead .dues")).click();
        await this.driver.findElement(By.css("#table2 thead .dues")).click();
        const dueValues = await dues(this.driver);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => b - a));
    });
});
