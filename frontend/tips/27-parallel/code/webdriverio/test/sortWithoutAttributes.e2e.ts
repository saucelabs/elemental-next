import {browser, $, $$, expect} from '@wdio/globals';

async function dues() {
    return $$('#table1 tbody tr td:nth-of-type(4)')
        .map(async (cell) => parseFloat((await cell.getText()).replace('$', '')));
}

describe('Sort Data Table Without Attributes', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/tables');
    });

    it('in ascending order', async () => {
        await $('#table1 thead tr th:nth-of-type(4)').click();
        await expect($('#table1 thead tr th:nth-of-type(4)')).toHaveElementClass('headerSortDown');
        const dueValues = await dues();
        expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
    });

    it('in descending order', async () => {
        await $('#table1 thead tr th:nth-of-type(4)').click();
        await $('#table1 thead tr th:nth-of-type(4)').click();
        await expect($('#table1 thead tr th:nth-of-type(4)')).toHaveElementClass('headerSortUp');
        const dueValues = await dues();
        expect(dueValues).toEqual([...dueValues].sort((a, b) => b - a));
    });
});
