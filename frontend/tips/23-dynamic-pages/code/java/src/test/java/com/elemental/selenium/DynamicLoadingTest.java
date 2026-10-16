package com.elemental.selenium;

import java.time.Duration;
import java.util.function.Function;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DynamicLoadingTest {
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

    private void waitFor(Function<WebDriver, Boolean> condition) {
        new WebDriverWait(driver, Duration.ofSeconds(10)).until(condition);
    }

    @ParameterizedTest
    @ValueSource(strings = {"1", "2"})
    public void dynamicLoading(String example) {
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/" + example);
        driver.findElement(By.cssSelector("#start button")).click();
        waitFor(d -> d.findElement(By.id("finish")).isDisplayed());
        Assertions.assertTrue(driver.findElement(By.id("finish")).isDisplayed());
    }
}
