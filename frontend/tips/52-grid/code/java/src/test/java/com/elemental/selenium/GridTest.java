package com.elemental.selenium;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

public class GridTest {
    private static final String GRID_URL =
        System.getenv().getOrDefault("GRID_URL", "http://localhost:4444");

    WebDriver driver;

    private static boolean gridIsRunning() {
        try {
            HttpRequest request = HttpRequest.newBuilder(URI.create(GRID_URL + "/status")).build();
            return HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.discarding()).statusCode() == 200;
        } catch (Exception e) {
            return false;
        }
    }

    @BeforeEach
    public void beforeEach() throws Exception {
        Assumptions.assumeTrue(gridIsRunning(),
            "Start a Selenium Grid on " + GRID_URL + " (or set GRID_URL) to run this test");
        driver = new RemoteWebDriver(URI.create(GRID_URL).toURL(), new FirefoxOptions());
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
    }
}
