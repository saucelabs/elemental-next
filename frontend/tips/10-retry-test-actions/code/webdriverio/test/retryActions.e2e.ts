import {browser, $} from '@wdio/globals';

describe('Retry Test Actions', () => {
    it('eventually displays a successful notification', async () => {
        await browser.waitUntil(async () => {
            await browser.url('https://the-internet.herokuapp.com/notification_message');
            const message = await $('#flash').getText();
            return message.includes('Action successful');
        }, {timeout: 30000, timeoutMsg: 'The notification never said "Action successful"'});
    });
});
