package com.elemental.selenium;

import java.net.URI;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

public class CloudTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

    WebDriver driver;

    @BeforeEach
    public void beforeEach() throws Exception {
        String username = System.getenv("SAUCE_USERNAME");
        String accessKey = System.getenv("SAUCE_ACCESS_KEY");
        Assumptions.assumeTrue(username != null && accessKey != null,
            "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");

        ChromeOptions options = new ChromeOptions();
        options.setBrowserVersion("latest");
        options.setPlatformName("Windows 11");
        options.setCapability("sauce:options", Map.of(
            "username", username,
            "accessKey", accessKey,
            "name", "Elemental Selenium - Tip 26 - Java"));
        driver = new RemoteWebDriver(URI.create(SAUCE_URL).toURL(), options);
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void title() {
        driver.get("https://the-internet.herokuapp.com");
        Assertions.assertTrue(driver.getTitle().contains("The Internet"));
    }
}
