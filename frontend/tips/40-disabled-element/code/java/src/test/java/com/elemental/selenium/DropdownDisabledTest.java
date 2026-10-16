package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DropdownDisabledTest {
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

    private WebElement option(String text) {
        return driver.findElements(By.tagName("option")).stream()
            .filter(option -> option.getText().equals(text))
            .findFirst()
            .orElseThrow();
    }

    @Test
    public void disabledOption() {
        driver.get("https://the-internet.herokuapp.com/dropdown");
        Assertions.assertFalse(option("Please select an option").isEnabled());
        Assertions.assertTrue(option("Option 1").isEnabled());
    }
}
