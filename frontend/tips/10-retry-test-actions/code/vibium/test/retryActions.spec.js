const assert = require('assert');
const {browser} = require('vibium');

async function retryIfMessageContains(failMessage, action, attempts = 10) {
    let message = await action();
    for (let attempt = 1; attempt < attempts && message.includes(failMessage); attempt++) {
        message = await action();
    }
    return message;
}

describe('Retry Test Actions', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('eventually displays a successful notification', async function () {
        const message = await retryIfMessageContains('please try again', async () => {
            await page.go('https://the-internet.herokuapp.com/notification_message');
            return page.find('#flash').text();
        });
        assert(message.includes('Action successful'));
    });
});
