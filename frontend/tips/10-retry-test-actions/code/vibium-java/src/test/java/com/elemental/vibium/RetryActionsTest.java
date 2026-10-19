package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.function.Supplier;

public class RetryActionsTest {
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

    static String retryIfMessageContains(String failMessage, Supplier<String> action) {
        String message = action.get();
        for (int attempt = 1; attempt < 10 && message.contains(failMessage); attempt++) {
            message = action.get();
        }
        return message;
    }

    @Test
    public void eventuallyDisplaysASuccessfulNotification() {
        String message = retryIfMessageContains("please try again", () -> {
            page.go("https://the-internet.herokuapp.com/notification_message");
            return page.find("#flash").text();
        });
        Assertions.assertTrue(message.contains("Action successful"));
    }
}
