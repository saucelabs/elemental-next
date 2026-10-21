package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class WrapperTest {
    Browser browser;
    LoggingPage page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = new LoggingPage(browser.page());
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void logsEveryAction() {
        page.go("https://the-internet.herokuapp.com");
        page.click("a[href=\"/checkboxes\"]");

        Assertions.assertEquals(List.of(
            "Navigated to https://the-internet.herokuapp.com",
            "Clicking on Checkboxes",
            "URL changed to https://the-internet.herokuapp.com/checkboxes"), page.messages);
    }
}
