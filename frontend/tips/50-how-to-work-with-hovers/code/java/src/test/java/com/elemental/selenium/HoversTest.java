package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class HoversTest {
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
    public void hover() {
        driver.get("https://the-internet.herokuapp.com/hovers");
        WebElement anAvatar = driver.findElement(By.className("figure"));
        WebElement caption = anAvatar.findElement(By.className("figcaption"));
        Assertions.assertFalse(caption.isDisplayed());

        new Actions(driver).moveToElement(anAvatar).perform();
        Assertions.assertTrue(caption.isDisplayed());
    }
}
