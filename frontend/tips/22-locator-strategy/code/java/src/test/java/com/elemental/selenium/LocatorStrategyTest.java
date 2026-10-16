package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LocatorStrategyTest {
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/download");
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void firstLinkOnThePage() {
        String link = driver.findElement(By.cssSelector("a")).getDomProperty("href");
        System.out.println(link);
        Assertions.assertTrue(link.contains("github.com"));
    }

    @Test
    public void firstLinkInTheContent() {
        String link = driver.findElement(By.cssSelector("#content a")).getDomProperty("href");
        System.out.println(link);
        Assertions.assertTrue(link.contains("/download/"));
    }

    @Test
    public void firstLinkInTheExample() {
        String link = driver.findElement(By.cssSelector("#content .example a")).getDomProperty("href");
        System.out.println(link);
        Assertions.assertTrue(link.contains("/download/"));
    }
}
