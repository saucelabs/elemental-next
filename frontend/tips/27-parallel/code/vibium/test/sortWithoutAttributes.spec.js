const assert = require('assert');
const {browser} = require('vibium');

async function dues(page) {
    const cells = await page.findAll('#table1 tbody tr td:nth-of-type(4)');
    return Promise.all(cells.map(async (cell) => parseFloat((await cell.text()).replace('$', ''))));
}

describe('Sort Data Table Without Attributes', function () {
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

    it('in ascending order', async function () {
        await page.find('#table1 thead tr th:nth-of-type(4)').click();
        await page.find('#table1 thead tr th:nth-of-type(4).headerSortDown');
        const dueValues = await dues(page);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => a - b));
    });

    it('in descending order', async function () {
        await page.find('#table1 thead tr th:nth-of-type(4)').click();
        await page.find('#table1 thead tr th:nth-of-type(4)').click();
        await page.find('#table1 thead tr th:nth-of-type(4).headerSortUp');
        const dueValues = await dues(page);
        assert.deepStrictEqual(dueValues, [...dueValues].sort((a, b) => b - a));
    });
});
