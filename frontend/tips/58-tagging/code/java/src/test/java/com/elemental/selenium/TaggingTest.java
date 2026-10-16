package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TaggingTest {
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

    @Test
    @Tag("smoke")
    public void title() {
        driver.get("https://the-internet.herokuapp.com");
        Assertions.assertEquals("The Internet", driver.getTitle());
    }

    // This test is not finished yet, so it fails. Since it's tagged as wip, it doesn't run with the smoke group.
    @Test
    @Tag("wip")
    public void workInProgress() {
        driver.get("https://the-internet.herokuapp.com");
        Assertions.assertEquals("Not finished yet", driver.getTitle());
    }
}
