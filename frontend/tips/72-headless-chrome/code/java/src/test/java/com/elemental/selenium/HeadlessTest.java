package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class HeadlessTest {
    ChromeDriver driver;

    @BeforeEach
    public void beforeEach() {
        ChromeOptions options = new ChromeOptions();
        // Runs Chrome without a window
        options.addArguments("--headless");
        driver = new ChromeDriver(options);
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
        Assertions.assertEquals("The Internet", driver.getTitle());

        String userAgent = (String) driver.executeScript("return navigator.userAgent");
        System.out.println(userAgent);
        Assertions.assertTrue(userAgent.contains("HeadlessChrome"));
    }
}
