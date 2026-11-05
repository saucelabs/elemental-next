package com.elemental.selenium;

import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.chrome.ChromeDriver;

public class ChromeTest {
    ChromeDriver driver;

    @BeforeEach
    public void beforeEach() {
        // Selenium Manager finds Chrome and the matching ChromeDriver, and downloads them when they are missing
        driver = new ChromeDriver();
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
        Map<?, ?> chrome = (Map<?, ?>) driver.getCapabilities().getCapability("chrome");
        System.out.println("Chrome " + driver.getCapabilities().getBrowserVersion()
            + ", ChromeDriver " + chrome.get("chromedriverVersion").toString().split(" ")[0]);
    }
}
