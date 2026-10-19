// Wraps a Vibium page so that going to a URL and clicking log what they do
class LoggingPage {
    constructor(page) {
        this.page = page;
        // The messages logged during the test, so the test can check them
        this.messages = [];
    }

    log(message) {
        console.log(message);
        this.messages.push(message);
    }

    async go(url) {
        await this.page.go(url);
        this.log(`Navigated to ${url}`);
    }

    async click(selector) {
        const element = await this.page.find(selector);
        this.log(`Clicking on ${await element.text()}`);
        const preClickUrl = await this.page.url();
        await element.click();
        await this.page.waitForLoad();
        const currentUrl = await this.page.url();
        if (currentUrl !== preClickUrl) {
            this.log(`URL changed to ${currentUrl}`);
        }
    }
}

module.exports = LoggingPage;
