package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BasePageTest {
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
    public void dynamicLoading() {
        DynamicLoadingPage dynamicLoading = new DynamicLoadingPage(driver);
        dynamicLoading.start();
        Assertions.assertEquals("Hello World!", dynamicLoading.finishText());
    }

    @Test
    public void login() {
        LoginPage login = new LoginPage(driver);
        login.loginAs("tomsmith", "SuperSecretPassword!");
        Assertions.assertTrue(login.successMessagePresent());
    }
}
