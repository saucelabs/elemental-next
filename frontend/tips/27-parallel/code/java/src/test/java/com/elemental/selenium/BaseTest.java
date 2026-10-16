package com.elemental.selenium;

import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public abstract class BaseTest {
    // JUnit creates a new instance of the test class for each test, so each test gets its own driver.
    protected WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/tables");
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    protected List<Double> dues(String locator) {
        return driver.findElements(By.cssSelector(locator)).stream()
            .map(due -> Double.parseDouble(due.getText().replace("$", "")))
            .toList();
    }
}
