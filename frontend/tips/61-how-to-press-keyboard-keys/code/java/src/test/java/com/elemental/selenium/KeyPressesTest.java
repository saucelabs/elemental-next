package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class KeyPressesTest {
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/key_presses");
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void sendKeysToAnElement() {
        driver.findElement(By.id("target")).sendKeys(Keys.SPACE);
        Assertions.assertEquals("You entered: SPACE", driver.findElement(By.id("result")).getText());
    }

    @Test
    public void sendKeysWithoutAnElement() {
        new Actions(driver).sendKeys(Keys.TAB).perform();
        Assertions.assertEquals("You entered: TAB", driver.findElement(By.id("result")).getText());
    }
}
