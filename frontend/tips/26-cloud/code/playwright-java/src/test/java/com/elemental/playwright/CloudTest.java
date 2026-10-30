package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import org.junit.jupiter.api.Test;

class CloudTest extends SauceTest {

    @Test
    void loadThePage() {
        Page page = openPage("chromium");
        page.navigate("https://the-internet.herokuapp.com");
        assertThat(page).hasTitle("The Internet");
    }
}
