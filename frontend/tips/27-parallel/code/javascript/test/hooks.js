const {Builder} = require("selenium-webdriver");

// Root hooks run before and after every test, in every file. Mocha needs them in parallel mode.
exports.mochaHooks = {
    async beforeEach() {
        this.driver = await new Builder().forBrowser("firefox").build();
        await this.driver.get("https://the-internet.herokuapp.com/tables");
    },

    async afterEach() {
        await this.driver.quit();
    },
};
