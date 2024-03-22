package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.firefox.FirefoxDriver;

public class NewWindowNewTabTest {
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
    public void newWindow() throws InterruptedException {
        driver.get("https://the-internet.herokuapp.com/windows");
        driver.switchTo().newWindow(WindowType.WINDOW);
        driver.get("https://the-internet.herokuapp.com/typos");
        Assertions.assertEquals(2, driver.getWindowHandles().toArray().length);
    }

    @Test
    public void newTab() throws InterruptedException {
        driver.get("https://the-internet.herokuapp.com/windows");
        driver.switchTo().newWindow(WindowType.TAB);
        driver.get("https://the-internet.herokuapp.com/typos");
        Assertions.assertEquals(2, driver.getWindowHandles().toArray().length);
    }

}