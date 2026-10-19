import {browser, expect} from '@wdio/globals';
import {gridIsRunning} from '../wdio.conf.ts';

describe('Selenium Grid', () => {
    before(function () {
        if (!gridIsRunning) {
            console.log('Start a Selenium Grid on http://localhost:4444 (or set GRID_URL) to run this test');
            this.skip();
        }
    });

    it('loads the page', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle('The Internet');
    });
});
