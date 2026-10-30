package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class HeadlessTest {

    @Test
    void loadThePage(Page page) {
        page.navigate("https://the-internet.herokuapp.com");
        assertThat(page).hasTitle("The Internet");

        String userAgent = (String) page.evaluate("() => navigator.userAgent");
        System.out.println(userAgent);
        assertTrue(userAgent.contains("HeadlessChrome"));
    }
}
