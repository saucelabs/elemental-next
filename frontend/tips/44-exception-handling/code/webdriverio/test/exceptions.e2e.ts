import {browser, $, expect} from '@wdio/globals';

describe('Exception Handling', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('#login button').click();
        await expect($('.flash.success')).toBeDisplayed();
    });

    it('throws an error when acting on a missing element', async () => {
        await expect($('#login').click()).rejects.toThrow(/wasn't found/);
    });

    it('does not display the login form', async () => {
        expect(await $('#login').isDisplayed()).toBe(false);
    });
});
