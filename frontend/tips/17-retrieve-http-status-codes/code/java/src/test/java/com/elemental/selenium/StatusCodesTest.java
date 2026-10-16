package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class StatusCodesTest {
    private static final String STATUS_CODE_SCRIPT =
        "return performance.getEntriesByType('navigation')[0].responseStatus";

    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    private long statusCode() {
        return (Long) ((JavascriptExecutor) driver).executeScript(STATUS_CODE_SCRIPT);
    }

    @ParameterizedTest
    @ValueSource(ints = {200, 301, 404, 500})
    public void statusCode(int expected) {
        driver.get("https://the-internet.herokuapp.com/status_codes/" + expected);
        Assertions.assertEquals(expected, statusCode());
    }
}
