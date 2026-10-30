package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class WindowsTest {

    @Test
    void multipleWindows(Page page) {
        page.navigate("https://the-internet.herokuapp.com/windows");

        Page newPage = page.context().waitForPage(() -> page.locator(".example a").click());

        assertThat(page).hasTitle("The Internet");
        assertThat(newPage).hasTitle("New Window");
    }
}
