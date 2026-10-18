import {browser, $, $$, expect} from '@wdio/globals';

async function texts(selector: string) {
    return $$(selector).map((element) => element.getText());
}

async function dues(selector: string) {
    return (await texts(selector)).map((due) => parseFloat(due.replace('$', '')));
}

describe('Tables', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/tables');
    });

    it('sorts a number column in ascending order', async () => {
        await $('#table1 thead tr th:nth-of-type(4)').click();
        await expect($('#table1 thead tr th:nth-of-type(4)')).toHaveElementClass('headerSortDown');
        const dueValues = await dues('#table1 tbody tr td:nth-of-type(4)');
        expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
    });

    it('sorts a number column in descending order', async () => {
        await $('#table1 thead tr th:nth-of-type(4)').click();
        await $('#table1 thead tr th:nth-of-type(4)').click();
        await expect($('#table1 thead tr th:nth-of-type(4)')).toHaveElementClass('headerSortUp');
        const dueValues = await dues('#table1 tbody tr td:nth-of-type(4)');
        expect(dueValues).toEqual([...dueValues].sort((a, b) => b - a));
    });

    it('sorts a text column in ascending order', async () => {
        await $('#table1 thead tr th:nth-of-type(3)').click();
        await expect($('#table1 thead tr th:nth-of-type(3)')).toHaveElementClass('headerSortDown');
        const emails = await texts('#table1 tbody tr td:nth-of-type(3)');
        expect(emails).toEqual([...emails].sort());
    });

    it('sorts a number column in ascending order with semantic locators', async () => {
        await $('#table2 thead th:has(.dues)').click();
        await expect($('#table2 thead th:has(.dues)')).toHaveElementClass('headerSortDown');
        const dueValues = await dues('#table2 tbody .dues');
        expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
    });
});
