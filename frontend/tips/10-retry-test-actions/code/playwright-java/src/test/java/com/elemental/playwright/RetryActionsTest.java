package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.assertions.LocatorAssertions;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;
import org.opentest4j.AssertionFailedError;

@UsePlaywright
class RetryActionsTest {

    private static final int ATTEMPTS = 10;

    @Test
    void eventuallyDisplaysASuccessfulNotification(Page page) {
        for (int attempt = 1; attempt <= ATTEMPTS; attempt++) {
            page.navigate("https://the-internet.herokuapp.com/notification_message");
            try {
                assertThat(page.locator("#flash")).containsText("Action successful",
                        new LocatorAssertions.ContainsTextOptions().setTimeout(1000));
                return;
            } catch (AssertionFailedError e) {
                if (attempt == ATTEMPTS) {
                    throw e;
                }
            }
        }
    }
}
