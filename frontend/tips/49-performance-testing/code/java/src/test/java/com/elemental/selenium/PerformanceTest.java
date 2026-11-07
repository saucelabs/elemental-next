package com.elemental.selenium;

import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.chrome.ChromeDriver;

public class PerformanceTest {
    // The Navigation Timing API of the browser measures each step of the page load, in milliseconds
    static final String TIMINGS = """
            const timing = performance.getEntriesByType('navigation')[0];
            return {
              firstByte: Math.round(timing.responseStart),
              domReady: Math.round(timing.domContentLoadedEventEnd),
              load: Math.round(timing.loadEventEnd),
            };
            """;
    static final long LOAD_BUDGET_MS = 10_000;
    ChromeDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new ChromeDriver();
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void pageLoadsWithinBudget() {
        driver.get("https://the-internet.herokuapp.com");
        @SuppressWarnings("unchecked")
        Map<String, Long> timings = (Map<String, Long>) driver.executeScript(TIMINGS);
        System.out.printf("First byte: %d ms, DOM ready: %d ms, load: %d ms%n",
                timings.get("firstByte"), timings.get("domReady"), timings.get("load"));

        // The load is 0 until the page has finished loading
        long load = timings.get("load");
        Assertions.assertTrue(load > 0 && load < LOAD_BUDGET_MS);
    }
}
