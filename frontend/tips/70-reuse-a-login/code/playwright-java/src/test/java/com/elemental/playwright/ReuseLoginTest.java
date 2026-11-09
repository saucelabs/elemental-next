package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

@UsePlaywright
class ReuseLoginTest {
    static final String BASE_URL = "https://the-internet.herokuapp.com";
    static String storageState;

    @BeforeAll
    static void logIn(Browser browser) {
        // Logs in through the form once, and keeps the cookies and the local storage of the logged-in user
        try (BrowserContext context = browser.newContext()) {
            Page page = context.newPage();
            page.navigate(BASE_URL + "/login");
            page.getByLabel("Username").fill("tomsmith");
            page.getByLabel("Password").fill("SuperSecretPassword!");
            page.locator("button[type='submit']").click();
            assertThat(page.locator("#username")).hasText("tomsmith");
            storageState = context.storageState();
        }
    }

    Page loggedInPage(Browser browser) {
        BrowserContext context = browser.newContext(new Browser.NewContextOptions().setStorageState(storageState));
        return context.newPage();
    }

    @Test
    void theSecureAreaShowsTheUser(Browser browser) {
        Page page = loggedInPage(browser);
        page.navigate(BASE_URL + "/secure");

        assertThat(page.locator("#username")).hasText("tomsmith");
        page.context().close();
    }

    @Test
    void logOut(Browser browser) {
        Page page = loggedInPage(browser);
        page.navigate(BASE_URL + "/secure");
        page.locator("a[href='/logout']").click();

        assertThat(page.locator("#flash")).containsText("You logged out of the secure area!");
        page.context().close();
    }
}
