package com.elemental.selenium;

import java.util.function.Supplier;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class RetryActionsTest {
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

    private String retryIfMessageContains(String failMessage, Supplier<String> action) {
        int attempts = 10;
        String message = action.get();
        for (int attempt = 1; attempt < attempts && message.contains(failMessage); attempt++) {
            message = action.get();
        }
        return message;
    }

    @Test
    public void notificationMessage() {
        String message = retryIfMessageContains("please try again", () -> {
            driver.get("https://the-internet.herokuapp.com/notification_message");
            return driver.findElement(By.id("flash")).getText();
        });
        Assertions.assertTrue(message.contains("Action successful"));
    }
}
