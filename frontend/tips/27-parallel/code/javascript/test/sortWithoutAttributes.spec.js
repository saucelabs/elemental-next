const assert = require("assert");
const {By} = require("selenium-webdriver");

describe("Sort Data Table Without Attributes", function () {
    async function dues(driver) {
        const cells = await driver.findElements(By.css("#table1 tbody tr td:nth-of-type(4)"));
        return Promise.all(cells.map(async (cell) => parseFloat((await cell.getText()).replace("$", ""))));
    }

    it("in ascending order", async function () {
        await this.driver.findElement(By.css("#table1 thead tr th:nth-of-type(4)")).click();
        const dueValues = await dues(this.driver);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });

    it("in descending order", async function () {
        await this.driver.findElement(By.css("#table1 thead tr th:nth-of-type(4)")).click();
        await this.driver.findElement(By.css("#table1 thead tr th:nth-of-type(4)")).click();
        const dueValues = await dues(this.driver);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => b - a));
    });
});
