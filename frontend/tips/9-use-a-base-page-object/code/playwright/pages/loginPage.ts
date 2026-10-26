import {BasePage} from './basePage';

export class LoginPage extends BasePage {
    readonly usernameInput = this.page.locator('#username');
    readonly passwordInput = this.page.locator('#password');
    readonly submitButton = this.page.locator('#login button');
    readonly successMessage = this.page.locator('.flash.success');

    async load() {
        await this.visit('/login');
    }

    async loginAs(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}
