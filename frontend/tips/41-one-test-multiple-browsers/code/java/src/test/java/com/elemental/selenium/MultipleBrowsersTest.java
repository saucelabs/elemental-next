package com.elemental.selenium;

import java.net.URI;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.AbstractDriverOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

public class MultipleBrowsersTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

    WebDriver driver;

    private void setUp(String browser) throws Exception {
        String username = System.getenv("SAUCE_USERNAME");
        String accessKey = System.getenv("SAUCE_ACCESS_KEY");
        Assumptions.assumeTrue(username != null && accessKey != null,
            "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");

        AbstractDriverOptions<?> options = switch (browser) {
            case "chrome" -> new ChromeOptions();
            case "firefox" -> new FirefoxOptions();
            case "edge" -> new EdgeOptions();
            default -> throw new IllegalArgumentException("Unknown browser: " + browser);
        };
        options.setBrowserVersion("latest");
        options.setPlatformName("Windows 11");
        options.setCapability("sauce:options", Map.of(
            "username", username,
            "accessKey", accessKey,
            "name", "Elemental Selenium - Tip 41 - Java - " + browser));
        driver = new RemoteWebDriver(URI.create(SAUCE_URL).toURL(), options);
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @ParameterizedTest
    @ValueSource(strings = {"chrome", "firefox", "edge"})
    public void title(String browser) throws Exception {
        setUp(browser);
        driver.get("https://the-internet.herokuapp.com");
        Assertions.assertEquals("The Internet", driver.getTitle());
    }
}
