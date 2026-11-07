import {browser, $, expect} from '@wdio/globals';

describe('Mock responses', () => {
    it('shows the mocked answer', async () => {
        const api = await browser.mock('https://the-internet.herokuapp.com/slow_api/data?*');
        await api.respond({message: 'Hello from the mock'});

        await browser.url('https://the-internet.herokuapp.com/slow_api');
        await $('#call-api').click();

        await expect($('#status-text')).toHaveText('Hello from the mock');
        await expect($('#attempts li')).toHaveText('200: Hello from the mock');
    });
});
