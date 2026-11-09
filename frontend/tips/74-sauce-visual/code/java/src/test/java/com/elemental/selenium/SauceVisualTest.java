package com.elemental.selenium;

import com.saucelabs.visual.CheckOptions;
import com.saucelabs.visual.DataCenter;
import com.saucelabs.visual.VisualApi;
import com.saucelabs.visual.graphql.type.DiffStatus;
import java.net.URI;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

public class SauceVisualTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

    RemoteWebDriver driver;
    VisualApi visual;

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
            "name", "Elemental Selenium - Tip 74 - Java"));
        driver = new RemoteWebDriver(URI.create(SAUCE_URL).toURL(), options);
        // A Visual build groups the snapshots of a test run. It finishes when the tests end
        visual = new VisualApi.Builder(driver, username, accessKey, DataCenter.US_WEST_1)
            .withBuild("Elemental Selenium - Tip 74 - Java")
            .build();
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void newsletterCard() {
        driver.get("https://the-internet.herokuapp.com/visual_diff");

        // Takes a screenshot of the card only, and compares it with its baseline in Sauce Labs
        CheckOptions options = new CheckOptions();
        options.setClipSelector("#card");
        visual.sauceVisualCheck("Newsletter card", options);

        // Waits for Sauce Labs to compare the snapshots. Changes show up there for review
        Map<DiffStatus, Integer> results = visual.sauceVisualResults();
        System.out.println("Review the changes at " + visual.getBuild().getUrl());
        Assertions.assertEquals(0, results.getOrDefault(DiffStatus.ERRORED, 0));
    }
}
