// selenium-webdriver for JavaScript doesn't come with an event firing driver, so we wrap the driver and the
// elements ourselves, and call the listener around each action.
class Wrapper {
    constructor(driver) {
        this.driver = driver;
        this.messages = [];
    }

    log(message) {
        console.log(message);
        this.messages.push(message);
    }

    async get(url) {
        await this.driver.get(url);
        this.log(`Navigated to ${url}`);
    }

    async findElement(locator) {
        this.log(`Finding element ${locator.value}`);
        const element = await this.driver.findElement(locator);
        this.log(`Found element ${locator.value}`);
        return {
            click: async () => {
                this.log(`Clicking on ${await element.getText()}`);
                const preClickUrl = await this.driver.getCurrentUrl();
                await element.click();
                const currentUrl = await this.driver.getCurrentUrl();
                if (currentUrl !== preClickUrl) {
                    this.log(`URL changed to ${currentUrl}`);
                }
            },
        };
    }

    async quit() {
        await this.driver.quit();
    }
}

module.exports = Wrapper;
