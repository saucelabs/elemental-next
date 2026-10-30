package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.APIRequestContext;
import com.microsoft.playwright.APIResponse;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.RequestOptions;
import org.junit.jupiter.api.Test;

@UsePlaywright
class SecureFilesTest {

    private static final String BASE_URL = "https://the-internet.herokuapp.com";

    @Test
    void filesBehindBasicAuth(Browser browser) {
        BrowserContext context = browser.newContext(
                new Browser.NewContextOptions().setHttpCredentials("admin", "admin"));
        Page page = context.newPage();
        page.navigate(BASE_URL + "/download_secure");
        String link = (String) page.locator(".example a").first().evaluate("element => element.href");

        APIResponse response = page.request().head(link);
        assertEquals(200, response.status(), link);
        context.close();
    }

    @Test
    void pageBehindFormLogin(Page page, Playwright playwright) {
        page.navigate(BASE_URL + "/login");
        page.locator("#username").fill("tomsmith");
        page.locator("#password").fill("SuperSecretPassword!");
        page.locator("#login button").click();
        assertThat(page.locator(".flash.success")).isVisible();

        APIResponse response = page.request().get(BASE_URL + "/secure", RequestOptions.create().setMaxRedirects(0));
        assertEquals(200, response.status());

        APIRequestContext loggedOut = playwright.request().newContext();
        response = loggedOut.get(BASE_URL + "/secure", RequestOptions.create().setMaxRedirects(0));
        assertEquals(302, response.status());
        loggedOut.dispose();
    }
}
