import {browser, $$, expect} from '@wdio/globals';

describe('Checkboxes', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes');
    });

    it('looks up the checked attribute', async () => {
        const checkboxes = await $$('input[type="checkbox"]');
        console.log(await checkboxes.map((checkbox) => checkbox.getAttribute('checked')));
        expect(await checkboxes[0].getAttribute('checked')).toBeNull();
        expect(await checkboxes[checkboxes.length - 1].getAttribute('checked')).not.toBeNull();
    });

    it('checks if the checkbox is selected', async () => {
        const checkboxes = await $$('input[type="checkbox"]');
        await expect(checkboxes[0]).not.toBeSelected();
        await expect(checkboxes[checkboxes.length - 1]).toBeSelected();
    });
});
