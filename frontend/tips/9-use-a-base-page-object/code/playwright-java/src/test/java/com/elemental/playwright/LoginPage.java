package com.elemental.playwright;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class LoginPage extends BasePage {

    public final Locator usernameInput;
    public final Locator passwordInput;
    public final Locator submitButton;
    public final Locator successMessage;

    public LoginPage(Page page) {
        super(page);
        usernameInput = page.locator("#username");
        passwordInput = page.locator("#password");
        submitButton = page.locator("#login button");
        successMessage = page.locator(".flash.success");
    }

    public void load() {
        visit("/login");
    }

    public void loginAs(String username, String password) {
        usernameInput.fill(username);
        passwordInput.fill(password);
        submitButton.click();
    }
}
