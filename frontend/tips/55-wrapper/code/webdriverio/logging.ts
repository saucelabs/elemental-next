import {browser} from '@wdio/globals';

// The messages logged during the test run, so the tests can check them
export const messages: string[] = [];

function log(message: string) {
    console.log(message);
    messages.push(message);
}

// Wraps the url and click commands so they log what they do
export function addLogging() {
    browser.overwriteCommand('url', async (originalUrl, url, options) => {
        const result = await originalUrl(url, options);
        log(`Navigated to ${url}`);
        return result;
    });

    browser.overwriteCommand('click', async function (this: WebdriverIO.Element, originalClick, options) {
        log(`Clicking on ${await this.getText()}`);
        const preClickUrl = await browser.getUrl();
        const result = await originalClick(options);
        const currentUrl = await browser.getUrl();
        if (currentUrl !== preClickUrl) {
            log(`URL changed to ${currentUrl}`);
        }
        return result;
    }, {attachToElement: true});
}
