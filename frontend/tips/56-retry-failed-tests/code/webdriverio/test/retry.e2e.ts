import {browser, $, expect} from '@wdio/globals';

// The page shows the successful message only some of the time, so this test is flaky on purpose.
// If it fails, it runs again (see `retries` in wdio.conf.ts).
describe('Notification Message', () => {
    it('is successful', async () => {
        await browser.url('https://the-internet.herokuapp.com/notification_message');

        const message = await $('#flash').getText();
        expect(message).toContain('Action successful');
    });
});
