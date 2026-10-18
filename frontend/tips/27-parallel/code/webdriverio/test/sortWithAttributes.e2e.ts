import {browser, $, $$, expect} from '@wdio/globals';

async function dues() {
    return $$('#table2 tbody .dues').map(async (cell) => parseFloat((await cell.getText()).replace('$', '')));
}

describe('Sort Data Table With Attributes', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/tables');
    });

    it('in ascending order', async () => {
        await $('#table2 thead th:has(.dues)').click();
        await expect($('#table2 thead th:has(.dues)')).toHaveElementClass('headerSortDown');
        const dueValues = await dues();
        expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
    });

    it('in descending order', async () => {
        await $('#table2 thead th:has(.dues)').click();
        await $('#table2 thead th:has(.dues)').click();
        await expect($('#table2 thead th:has(.dues)')).toHaveElementClass('headerSortUp');
        const dueValues = await dues();
        expect(dueValues).toEqual([...dueValues].sort((a, b) => b - a));
    });
});
