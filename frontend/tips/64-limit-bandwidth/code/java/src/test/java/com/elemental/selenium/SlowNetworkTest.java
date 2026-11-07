package com.elemental.selenium;

import java.time.Duration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chromium.ChromiumNetworkConditions;

public class SlowNetworkTest {
    ChromeDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new ChromeDriver();
        // Every request waits half a second, downloads at 200 KB/s and uploads at 50 KB/s
        ChromiumNetworkConditions conditions = new ChromiumNetworkConditions()
                .setLatency(Duration.ofMillis(500))
                .setDownloadThroughput(200 * 1024)
                .setUploadThroughput(50 * 1024);
        driver.setNetworkConditions(conditions);
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void pageLoadsOnSlowNetwork() {
        long start = System.nanoTime();
        driver.get("https://the-internet.herokuapp.com");
        double seconds = (System.nanoTime() - start) / 1_000_000_000.0;
        System.out.printf("The page loaded in %.1f seconds%n", seconds);

        Assertions.assertEquals("Welcome to the-internet", driver.findElement(By.cssSelector(".heading")).getText());
        // On a fast connection, the page loads in 1 or 2 seconds
        Assertions.assertTrue(seconds >= 3);
    }
}
