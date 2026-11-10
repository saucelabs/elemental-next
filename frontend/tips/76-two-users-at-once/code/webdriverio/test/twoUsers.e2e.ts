import {multiRemoteBrowser, expect} from '@wdio/globals';

// A random room, so tests running at the same time don't see each other's messages
const CHAT_URL = `https://the-internet.herokuapp.com/chat?room=elemental-${crypto.randomUUID().slice(0, 8)}`;

async function join(user: WebdriverIO.Browser, name: string) {
    await user.url(CHAT_URL);
    await expect(user.$('#status')).toHaveText('Connected');
    await user.$('#name').setValue(name);
    await user.$('#join').click();
}

async function sendMessage(user: WebdriverIO.Browser, text: string) {
    await user.$('#message').setValue(text);
    await user.$('#send').click();
}

describe('Two users at once', () => {
    it('two users chat', async () => {
        // The browsers of the multiremote capabilities in wdio.conf.ts
        const alice = multiRemoteBrowser.getInstance('alice');
        const bob = multiRemoteBrowser.getInstance('bob');

        await join(alice, 'Alice');
        await join(bob, 'Bob');
        // Messages are not saved: Alice waits until Bob is in the room before she writes
        await expect(alice.$('#messages')).toHaveText(expect.stringContaining('Bob joined'));

        await sendMessage(alice, 'Hi Bob');
        await expect(bob.$('#messages')).toHaveText(expect.stringContaining('Alice: Hi Bob'));

        await sendMessage(bob, 'Hi Alice');
        await expect(alice.$('#messages')).toHaveText(expect.stringContaining('Bob: Hi Alice'));
    });
});
