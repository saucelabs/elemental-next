package com.elemental.selenium;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.bidi.module.Network;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.json.Json;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RecordHarTest {
    static final String BASE_URL = "https://the-internet.herokuapp.com";
    static final Path HAR_FILE = Path.of("journey.har");
    ChromeDriver driver;
    Network network;

    @BeforeEach
    public void beforeEach() {
        ChromeOptions options = new ChromeOptions();
        // Turns on WebDriver BiDi, which sends every request of the browser to the test
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
    public void recordUserJourney() throws IOException {
        List<Map<String, Object>> entries = new CopyOnWriteArrayList<>();
        List<String> urls = new CopyOnWriteArrayList<>();
        network.onBeforeRequestSent(event -> {
            String url = event.getRequest().getUrl();
            // Keeps only the requests to the site under test, not the ones to third parties
            if (url.startsWith(BASE_URL)) {
                urls.add(url);
                entries.add(Map.of(
                        "startedDateTime", Instant.ofEpochMilli(event.getTimestamp()).toString(),
                        "request", Map.of("method", event.getRequest().getMethod(), "url", url)));
            }
        });

        driver.get(BASE_URL);
        driver.findElement(By.linkText("Dynamic Loading")).click();
        driver.findElement(By.partialLinkText("Example 2")).click();
        driver.findElement(By.cssSelector("#start button")).click();
        WebElement finish = new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
        Assertions.assertEquals("Hello World!", finish.getText());

        Map<String, Object> har = Map.of("log", Map.of(
                "version", "1.2",
                "creator", Map.of("name", "Elemental Selenium", "version", "1.0"),
                "entries", entries));
        Files.writeString(HAR_FILE, new Json().toJson(har));

        for (String page : List.of("/", "/dynamic_loading", "/dynamic_loading/2")) {
            Assertions.assertTrue(urls.contains(BASE_URL + page), "Not recorded: " + page);
        }
    }
}
