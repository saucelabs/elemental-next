const BasePage = require('./basePage');

const USERNAME_INPUT = '#username';
const PASSWORD_INPUT = '#password';
const SUBMIT_BUTTON = '#login button';
const SUCCESS_MESSAGE = '.flash.success';

class LoginPage extends BasePage {
    async load() {
        await this.visit('/login');
    }

    async loginAs(username, password) {
        await this.type(USERNAME_INPUT, username);
        await this.type(PASSWORD_INPUT, password);
        await this.click(SUBMIT_BUTTON);
    }

    async successMessagePresent() {
        await this.waitFor(SUCCESS_MESSAGE);
        return this.isDisplayed(SUCCESS_MESSAGE);
    }
}

module.exports = LoginPage;
