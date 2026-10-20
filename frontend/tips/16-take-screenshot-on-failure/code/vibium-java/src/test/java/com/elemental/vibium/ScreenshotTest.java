package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;

public class ScreenshotTest {
    Browser browser;
    Page page;

    @RegisterExtension
    ScreenshotOnFailure screenshotOnFailure = new ScreenshotOnFailure(() -> page);

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
    public void failsOnPurpose() {
        page.go("https://the-internet.herokuapp.com");
        Assertions.assertEquals("blah blah blah", page.find("h1").text());
    }
}
