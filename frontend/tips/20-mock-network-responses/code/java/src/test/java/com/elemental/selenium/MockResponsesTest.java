package com.elemental.selenium;

import java.time.Duration;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.bidi.module.Network;
import org.openqa.selenium.bidi.network.AddInterceptParameters;
import org.openqa.selenium.bidi.network.BytesValue;
import org.openqa.selenium.bidi.network.Header;
import org.openqa.selenium.bidi.network.InterceptPhase;
import org.openqa.selenium.bidi.network.ProvideResponseParameters;
import org.openqa.selenium.bidi.network.UrlPattern;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MockResponsesTest {
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
    public void pageShowsTheMockedAnswer() {
        // Pauses the calls to /slow_api/data, with any query string
        UrlPattern api = new UrlPattern().hostname("the-internet.herokuapp.com").pathname("/slow_api/data");
        network.addIntercept(new AddInterceptParameters(InterceptPhase.BEFORE_REQUEST_SENT).urlPattern(api));
        network.onBeforeRequestSent(event -> {
            if (event.isBlocked()) {
                network.provideResponse(new ProvideResponseParameters(event.getRequest().getRequestId())
                        .statusCode(200)
                        .headers(List.of(new Header("Content-Type",
                                new BytesValue(BytesValue.Type.STRING, "application/json"))))
                        .body(new BytesValue(BytesValue.Type.STRING, "{\"message\": \"Hello from the mock\"}")));
            }
        });

        driver.get("https://the-internet.herokuapp.com/slow_api");
        driver.findElement(By.id("call-api")).click();
        new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.textToBe(By.id("status-text"), "Hello from the mock"));
        Assertions.assertEquals("200: Hello from the mock", driver.findElement(By.cssSelector("#attempts li")).getText());
    }
}
