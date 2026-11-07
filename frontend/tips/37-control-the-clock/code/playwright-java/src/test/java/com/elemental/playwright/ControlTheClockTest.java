package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class ControlTheClockTest {

    @Test
    void toastHidesItselfAfterOneMinute(Page page) {
        // Replaces the timers of the page with fake ones that move only when the test says so
        page.clock().install();

        page.navigate("https://the-internet.herokuapp.com/toasts?duration=60000");
        page.locator("#success-toast").click();
        assertThat(page.locator(".toast-message")).hasText("Saved successfully");

        page.clock().runFor(59000);
        assertThat(page.locator(".toast")).isVisible();

        page.clock().runFor(1000);
        assertThat(page.locator(".toast")).hasCount(0);
    }
}
