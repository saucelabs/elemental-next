package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class DisabledElementTest {
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
    public void findsTheDisabledOption() {
        page.go("https://the-internet.herokuapp.com/dropdown");

        Assertions.assertFalse(page.find(new SelectorOptions().role("option").text("Please select an option")).isEnabled());
        Assertions.assertTrue(page.find(new SelectorOptions().role("option").text("Option 1")).isEnabled());
    }
}
