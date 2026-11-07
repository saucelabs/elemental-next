package com.elemental.selenium;

import java.time.Duration;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.bidi.module.Network;
import org.openqa.selenium.bidi.network.AddInterceptParameters;
import org.openqa.selenium.bidi.network.InterceptPhase;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BlockRequestsTest {
    static final String SLOW_REQUEST = "https://the-internet.herokuapp.com/slow_external";
    ChromeDriver driver;
    Network network;

    @BeforeEach
    public void beforeEach() {
        ChromeOptions options = new ChromeOptions();
        // Turns on WebDriver BiDi, which lets the test intercept network requests
        options.enableBiDi();
        driver = new ChromeDriver(options);
        network = new Network(driver);
    }

    @AfterEach
    public void afterEach() {
        if (network != null) {
            network.close();
        }
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void slowRequestIsBlocked() {
        List<String> blocked = new CopyOnWriteArrayList<>();
        network.addIntercept(
                new AddInterceptParameters(InterceptPhase.BEFORE_REQUEST_SENT).urlStringPattern(SLOW_REQUEST));
        network.onBeforeRequestSent(event -> {
            if (event.isBlocked()) {
                blocked.add(event.getRequest().getUrl());
                network.failRequest(event.getRequest().getRequestId());
            }
        });

        driver.get("https://the-internet.herokuapp.com/slow");
        // jQuery.active counts the requests that are still running. The slow request takes 30 seconds,
        // so it reaches 0 in time only when the request is blocked.
        new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(d -> ((Long) driver.executeScript("return jQuery.active")) == 0);
        Assertions.assertEquals(List.of(SLOW_REQUEST), blocked);
    }
}
