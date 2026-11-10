const crypto = require("crypto");
const {Builder, By, until} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const getBrowserInstance = require("selenium-webdriver/bidi/browser");
const getBrowsingContextInstance = require("selenium-webdriver/bidi/browsingContext");
const {CreateContextParameters} = require("selenium-webdriver/bidi/createContextParameters");

// A random room, so tests running at the same time don't see each other's messages
const CHAT_URL = `https://the-internet.herokuapp.com/chat?room=elemental-${crypto.randomUUID().slice(0, 8)}`;

async function newUserWindow(driver) {
    // A user context has its own cookies and storage, like a fresh browser profile
    const userContext = await (await getBrowserInstance(driver)).createUserContext();
    const createParameters = new CreateContextParameters().userContext(userContext);
    const window = await getBrowsingContextInstance(driver, {type: "window", createParameters});
    return window.id;
}

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
    let driver;

    beforeEach(async function () {
        // Turns on WebDriver BiDi, which lets the test create user contexts
        const options = new firefox.Options().enableBidi();
        driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
    });

    afterEach(async function () {
        await driver?.quit();
    });

    it("two users chat", async function () {
        const alice = await newUserWindow(driver);
        const bob = await newUserWindow(driver);

        await driver.switchTo().window(alice);
        await join(driver, "Alice");
        await driver.switchTo().window(bob);
        await join(driver, "Bob");

        // Messages are not saved: Alice waits until Bob is in the room before she writes
        await driver.switchTo().window(alice);
        await waitForText(driver, "messages", "Bob joined");
        await sendMessage(driver, "Hi Bob");

        await driver.switchTo().window(bob);
        await waitForText(driver, "messages", "Alice: Hi Bob");
        await sendMessage(driver, "Hi Alice");

        await driver.switchTo().window(alice);
        await waitForText(driver, "messages", "Bob: Hi Alice");
    });
});
