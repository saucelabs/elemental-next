package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BasicAuthTest {
    private static final String MESSAGE = "Congratulations! You must have the proper credentials.";

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
    public void credentialsInUrl() {
        driver.get("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        String pageMessage = driver.findElement(By.cssSelector(".example p")).getText();
        Assertions.assertEquals(MESSAGE, pageMessage);
    }

    @Test
    public void credentialsCachedByTheBrowser() {
        driver.get("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        driver.get("https://the-internet.herokuapp.com/basic_auth");
        String pageMessage = driver.findElement(By.cssSelector(".example p")).getText();
        Assertions.assertEquals(MESSAGE, pageMessage);
    }
}
