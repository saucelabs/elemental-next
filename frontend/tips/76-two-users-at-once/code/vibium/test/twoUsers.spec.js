const crypto = require('crypto');
const {browser} = require('vibium');

// A random room, so tests running at the same time don't see each other's messages
const CHAT_URL = `https://the-internet.herokuapp.com/chat?room=elemental-${crypto.randomUUID().slice(0, 8)}`;

async function join(bro, name) {
    const page = await bro.page();
    await page.go(CHAT_URL);
    await page.waitForFunction('document.getElementById("status").textContent === "Connected"');
    await page.find('#name').fill(name);
    await page.find('#join').click();
    return page;
}

async function sendMessage(page, text) {
    await page.find('#message').fill(text);
    await page.find('#send').click();
}

describe('Two users at once', function () {
    let aliceBrowser;
    let bobBrowser;

    beforeEach(async function () {
        aliceBrowser = await browser.start();
        bobBrowser = await browser.start();
    });

    afterEach(async function () {
        await aliceBrowser?.stop();
        await bobBrowser?.stop();
    });

    it('two users chat', async function () {
        const alice = await join(aliceBrowser, 'Alice');
        const bob = await join(bobBrowser, 'Bob');
        // Messages are not saved: Alice waits until Bob is in the room before she writes
        await alice.find('#messages').find({text: 'Bob joined'});

        await sendMessage(alice, 'Hi Bob');
        await bob.find('#messages').find({text: 'Alice: Hi Bob'});

        await sendMessage(bob, 'Hi Alice');
        await alice.find('#messages').find({text: 'Bob: Hi Alice'});
    });
});
