const assert = require("assert");
const {By} = require("selenium-webdriver");

describe("Sort Data Table With Attributes", function () {
    async function dues(driver) {
        const cells = await driver.findElements(By.css("#table2 tbody .dues"));
        return Promise.all(cells.map(async (cell) => parseFloat((await cell.getText()).replace("$", ""))));
    }

    // Waits until the header has the class of the sort order, which tells that the table is sorted
    async function waitForSort(driver, header, sortClass) {
        await driver.wait(async () => {
            const classes = await driver.findElement(By.css(header)).getAttribute("class");
            return classes.includes(sortClass);
        }, 5000);
    }

    it("in ascending order", async function () {
        await this.driver.findElement(By.css("#table2 thead .dues")).click();
        await waitForSort(this.driver, "#table2 thead th:has(.dues)", "headerSortDown");
        const dueValues = await dues(this.driver);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });

    it("in descending order", async function () {
        await this.driver.findElement(By.css("#table2 thead .dues")).click();
        await this.driver.findElement(By.css("#table2 thead .dues")).click();
        await waitForSort(this.driver, "#table2 thead th:has(.dues)", "headerSortUp");
        const dueValues = await dues(this.driver);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => b - a));
    });
});
