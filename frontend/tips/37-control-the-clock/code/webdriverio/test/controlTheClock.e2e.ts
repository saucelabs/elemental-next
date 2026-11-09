import {browser, $, $$, expect} from '@wdio/globals';

describe('Control the clock', () => {
    it('the toast hides itself after one minute', async () => {
        // Replaces the timers of the page with fake ones that move only when the test says so
        const clock = await browser.emulate('clock');

        await browser.url('https://the-internet.herokuapp.com/toasts?duration=60000');
        await $('#success-toast').click();
        await expect($('.toast-message')).toHaveText('Saved successfully');

        await clock.tick(59000);
        await expect($$('.toast')).toBeElementsArrayOfSize(1);

        await clock.tick(1000);
        await expect($$('.toast')).toBeElementsArrayOfSize(0);
    });
});
