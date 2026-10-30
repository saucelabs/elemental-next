package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.AriaRole;
import org.junit.jupiter.api.Test;

@UsePlaywright
class LoginTest {

    // Each step is code that the Playwright CLI printed in the session of the tip, in Java
    @Test
    void login(Page page) {
        page.navigate("https://the-internet.herokuapp.com");
        page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Form Authentication")).click();
        page.locator("#username").fill("tomsmith");
        page.locator("#password").fill("SuperSecretPassword!");
        page.locator("button[type=submit]").click();
        assertThat(page.locator("#flash")).containsText("You logged into a secure area!");
    }
}
