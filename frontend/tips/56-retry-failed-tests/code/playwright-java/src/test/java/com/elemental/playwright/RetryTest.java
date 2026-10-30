package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class RetryTest {

    // The page shows the successful message only some of the time, so this test is flaky on purpose.
    // If it fails, Maven Surefire runs it again (see rerunFailingTestsCount in the pom.xml).
    @Test
    void notificationMessageIsSuccessful(Page page) {
        page.navigate("https://the-internet.herokuapp.com/notification_message");

        String message = page.locator("#flash").textContent();
        assertTrue(message.contains("Action successful"), message);
    }
}
