package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.safari.SafariDriver;

// Safari runs on macOS only, so the test is skipped on Windows and Linux
@EnabledOnOs(OS.MAC)
public class SafariTest {
    SafariDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new SafariDriver();
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void pageLoaded() {
        driver.get("https://the-internet.herokuapp.com");
        Capabilities capabilities = driver.getCapabilities();
        System.out.println(capabilities.getBrowserName() + " " + capabilities.getBrowserVersion());

        Assertions.assertEquals("The Internet", driver.getTitle());
    }
}
