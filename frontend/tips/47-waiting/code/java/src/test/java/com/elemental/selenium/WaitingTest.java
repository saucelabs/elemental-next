package com.elemental.selenium;

import java.time.Duration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitingTest {
    private static final String BASE_URL = "https://the-internet.herokuapp.com/dynamic_loading";

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

    @Test
    public void implicitWaitGivesUpBeforeTheElementIsRendered() {
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
        driver.get(BASE_URL + "/2");
        driver.findElement(By.cssSelector("#start button")).click();
        Assertions.assertThrows(NoSuchElementException.class, () -> driver.findElement(By.id("finish")));
    }

    @Test
    public void implicitWaitDoesNotWaitForHiddenElements() {
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
        driver.get(BASE_URL + "/1");
        driver.findElement(By.cssSelector("#start button")).click();
        Assertions.assertFalse(driver.findElement(By.id("finish")).isDisplayed());
    }

    @ParameterizedTest
    @ValueSource(strings = {"1", "2"})
    public void explicitWait(String example) {
        driver.get(BASE_URL + "/" + example);
        driver.findElement(By.cssSelector("#start button")).click();
        WebElement finish = new WebDriverWait(driver, Duration.ofSeconds(10))
            .until(ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
        Assertions.assertEquals("Hello World!", finish.getText());
    }
}
