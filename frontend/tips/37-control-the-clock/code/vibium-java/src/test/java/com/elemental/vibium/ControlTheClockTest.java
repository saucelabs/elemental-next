package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ControlTheClockTest {
    static final String TOASTS = "document.querySelectorAll('.toast').length";
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void toastHidesItselfAfterOneMinute() {
        // Replaces the timers of the page with fake ones that move only when the test says so
        page.clock().install();

        page.go("https://the-internet.herokuapp.com/toasts?duration=60000");
        page.find("#success-toast").click();
        Assertions.assertEquals("Saved successfully", page.find(".toast-message").text());

        page.clock().runFor(59000);
        Assertions.assertEquals(1, ((Number) page.evaluate(TOASTS)).intValue());

        page.clock().runFor(1000);
        Assertions.assertEquals(0, ((Number) page.evaluate(TOASTS)).intValue());
    }
}
