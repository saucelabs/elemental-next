package com.elemental.selenium;

import java.time.Duration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class JavaScriptAlertsTest {
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/javascript_alerts");
        driver.findElements(By.cssSelector("button")).get(1).click();
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    private Alert alert() {
        return new WebDriverWait(driver, Duration.ofSeconds(5)).until(ExpectedConditions.alertIsPresent());
    }

    @Test
    public void acceptConfirmation() {
        alert().accept();
        Assertions.assertEquals("You clicked: Ok", driver.findElement(By.id("result")).getText());
    }

    @Test
    public void dismissConfirmation() {
        alert().dismiss();
        Assertions.assertEquals("You clicked: Cancel", driver.findElement(By.id("result")).getText());
    }
}
