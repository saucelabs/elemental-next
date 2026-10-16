package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class NotificationTest {
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    // The page shows the successful message only some of the time, so this test is flaky on purpose.
    // If it fails, Maven Surefire runs it again (see rerunFailingTestsCount in the pom.xml).
    @Test
    public void notificationMessage() {
        driver.get("https://the-internet.herokuapp.com/notification_message");
        String message = driver.findElement(By.id("flash")).getText();
        Assertions.assertTrue(message.contains("Action successful"), message);
    }
}
