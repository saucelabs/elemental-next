package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class RetryTest {
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

    // The page shows the successful message only some of the time, so this test is flaky on purpose.
    // If it fails, Maven Surefire runs it again (see pom.xml), up to 9 more times.
    @Test
    public void notificationMessage() {
        page.go("https://the-internet.herokuapp.com/notification_message");
        String message = page.find("#flash").text();
        Assertions.assertTrue(message.contains("Action successful"), message);
    }
}
