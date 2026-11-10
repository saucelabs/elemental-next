const crypto = require("crypto");
const {Builder, By, until} = require("selenium-webdriver");

// A random room, so tests running at the same time don't see each other's messages
const CHAT_URL = `https://the-internet.herokuapp.com/chat?room=elemental-${crypto.randomUUID().slice(0, 8)}`;

async function waitForText(driver, id, text) {
    const element = await driver.findElement(By.id(id));
    await driver.wait(until.elementTextContains(element, text), 10000);
}

async function join(driver, name) {
    await driver.get(CHAT_URL);
    await waitForText(driver, "status", "Connected");
    await driver.findElement(By.id("name")).sendKeys(name);
    await driver.findElement(By.id("join")).click();
}

async function sendMessage(driver, text) {
    await driver.findElement(By.id("message")).sendKeys(text);
    await driver.findElement(By.id("send")).click();
}

describe("Two users at once", function () {
    let alice;
    let bob;

    beforeEach(async function () {
        alice = await new Builder().forBrowser("firefox").build();
        bob = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await alice?.quit();
        await bob?.quit();
    });

    it("two users chat", async function () {
        await join(alice, "Alice");
        await join(bob, "Bob");
        // Messages are not saved: Alice waits until Bob is in the room before she writes
        await waitForText(alice, "messages", "Bob joined");

        await sendMessage(alice, "Hi Bob");
        await waitForText(bob, "messages", "Alice: Hi Bob");

        await sendMessage(bob, "Hi Alice");
        await waitForText(alice, "messages", "Bob: Hi Alice");
    });
});
