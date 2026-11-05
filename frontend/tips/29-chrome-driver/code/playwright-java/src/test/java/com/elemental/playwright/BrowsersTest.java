package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import org.junit.jupiter.api.Test;

class BrowsersTest {

    private void loadThePage(String name, BrowserType.LaunchOptions options) {
        try (Playwright playwright = Playwright.create();
             Browser browser = playwright.chromium().launch(options)) {
            Page page = browser.newPage();
            page.navigate("https://the-internet.herokuapp.com");
            assertThat(page).hasTitle("The Internet");
            System.out.println(name + " " + browser.version());
        }
    }

    // The browser that `install chromium` downloaded for this Playwright version
    @Test
    void playwrightChromium() {
        loadThePage("Playwright Chromium", new BrowserType.LaunchOptions());
    }

    // The Google Chrome installed on this machine
    @Test
    void googleChrome() {
        loadThePage("chrome", new BrowserType.LaunchOptions().setChannel("chrome"));
    }
}
