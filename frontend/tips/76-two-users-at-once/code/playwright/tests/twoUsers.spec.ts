import {test, expect, Browser, Page} from '@playwright/test';

// A random room, so tests running at the same time don't see each other's messages
const CHAT_URL = `https://the-internet.herokuapp.com/chat?room=elemental-${crypto.randomUUID().slice(0, 8)}`;

async function join(browser: Browser, name: string): Promise<Page> {
    // Each user gets a browser context of their own: a fresh browser profile, like a second browser
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(CHAT_URL);
    await expect(page.locator('#status')).toHaveText('Connected');
    await page.locator('#name').fill(name);
    await page.locator('#join').click();
    return page;
}

async function sendMessage(page: Page, text: string) {
    await page.locator('#message').fill(text);
    await page.locator('#send').click();
}

test('two users chat', async ({browser}) => {
    const alice = await join(browser, 'Alice');
    const bob = await join(browser, 'Bob');
    // Messages are not saved: Alice waits until Bob is in the room before she writes
    await expect(alice.locator('#messages')).toContainText('Bob joined');

    await sendMessage(alice, 'Hi Bob');
    await expect(bob.locator('#messages')).toContainText('Alice: Hi Bob');

    await sendMessage(bob, 'Hi Alice');
    await expect(alice.locator('#messages')).toContainText('Bob: Hi Alice');

    await alice.context().close();
    await bob.context().close();
});
