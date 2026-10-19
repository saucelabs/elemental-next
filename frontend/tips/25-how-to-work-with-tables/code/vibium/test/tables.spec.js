const assert = require('assert');
const {browser} = require('vibium');

async function texts(page, selector) {
    const cells = await page.findAll(selector);
    return Promise.all(cells.map((cell) => cell.text()));
}

async function dues(page, selector) {
    return (await texts(page, selector)).map((due) => parseFloat(due.replace('$', '')));
}

describe('Tables', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.go('https://the-internet.herokuapp.com/tables');
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('sorts a number column in ascending order', async function () {
        await page.find('#table1 thead tr th:nth-of-type(4)').click();
        await page.find('#table1 thead tr th:nth-of-type(4).headerSortDown');
        const dueValues = await dues(page, '#table1 tbody tr td:nth-of-type(4)');
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });

    it('sorts a number column in descending order', async function () {
        await page.find('#table1 thead tr th:nth-of-type(4)').click();
        await page.find('#table1 thead tr th:nth-of-type(4)').click();
        await page.find('#table1 thead tr th:nth-of-type(4).headerSortUp');
        const dueValues = await dues(page, '#table1 tbody tr td:nth-of-type(4)');
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => b - a));
    });

    it('sorts a text column in ascending order', async function () {
        await page.find('#table1 thead tr th:nth-of-type(3)').click();
        await page.find('#table1 thead tr th:nth-of-type(3).headerSortDown');
        const emails = await texts(page, '#table1 tbody tr td:nth-of-type(3)');
        assert.deepStrictEqual(emails, [...emails].sort());
    });

    it('sorts a number column in ascending order with semantic locators', async function () {
        await page.find('#table2 thead .dues').click();
        await page.find('#table2 thead th.headerSortDown:has(.dues)');
        const dueValues = await dues(page, '#table2 tbody .dues');
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });
});
