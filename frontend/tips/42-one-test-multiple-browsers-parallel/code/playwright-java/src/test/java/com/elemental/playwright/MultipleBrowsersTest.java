package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class MultipleBrowsersTest extends SauceTest {

    @ParameterizedTest
    @ValueSource(strings = {"chromium", "firefox", "webkit"})
    void loadThePage(String browserName) {
        Page page = openPage(browserName);
        page.navigate("https://the-internet.herokuapp.com");
        assertThat(page).hasTitle("The Internet");
    }
}
