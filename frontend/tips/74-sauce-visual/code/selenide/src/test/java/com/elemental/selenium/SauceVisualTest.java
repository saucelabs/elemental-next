package com.elemental.selenium;

import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

import com.codeborne.selenide.Configuration;
import com.saucelabs.visual.CheckOptions;
import com.saucelabs.visual.DataCenter;
import com.saucelabs.visual.VisualApi;
import com.saucelabs.visual.graphql.type.DiffStatus;
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

    VisualApi visual;

    @BeforeEach
    void setUp() {
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
            "name", "Elemental Selenium - Tip 74 - Selenide"));
        Configuration.remote = SAUCE_URL;
        Configuration.browserCapabilities = options;

        open("https://the-internet.herokuapp.com/visual_diff");
        // A Visual build groups the snapshots of a test run. It finishes when the tests end
        visual = new VisualApi.Builder((RemoteWebDriver) getWebDriver(), username, accessKey, DataCenter.US_WEST_1)
            .withBuild("Elemental Selenium - Tip 74 - Selenide")
            .build();
    }

    @AfterEach
    void tearDown() {
        closeWebDriver();
    }

    @Test
    public void newsletterCard() {
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
