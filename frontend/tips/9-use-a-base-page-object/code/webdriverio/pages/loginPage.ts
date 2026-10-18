import {$} from '@wdio/globals';
import BasePage from './basePage.js';

class LoginPage extends BasePage {
    get usernameInput() {
        return $('#username');
    }

    get passwordInput() {
        return $('#password');
    }

    get submitButton() {
        return $('#login button');
    }

    get successMessage() {
        return $('.flash.success');
    }

    async load() {
        await this.visit('/login');
    }

    async loginAs(username: string, password: string) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
}

export default new LoginPage();
