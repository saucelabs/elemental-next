package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class ReuseLoginTest {
    static final String BASE_URL = "https://the-internet.herokuapp.com";
    static Cookie sessionCookie;
    WebDriver driver;

    @BeforeAll
    public static void logIn() {
        // Logs in through the form once, and keeps the session cookie of the logged-in user
        WebDriver driver = new FirefoxDriver();
        try {
            driver.get(BASE_URL + "/login");
            driver.findElement(By.id("username")).sendKeys("tomsmith");
            driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!");
            driver.findElement(By.cssSelector("button[type='submit']")).click();
            sessionCookie = driver.manage().getCookieNamed("rack.session");
        } finally {
            driver.quit();
        }
    }

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        // A cookie can only be added for the site of the current page
        driver.get(BASE_URL);
        driver.manage().addCookie(new Cookie(sessionCookie.getName(), sessionCookie.getValue()));
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void theSecureAreaShowsTheUser() {
        driver.get(BASE_URL + "/secure");

        Assertions.assertEquals("tomsmith", driver.findElement(By.id("username")).getText());
    }

    @Test
    public void logOut() {
        driver.get(BASE_URL + "/secure");
        driver.findElement(By.cssSelector("a[href='/logout']")).click();

        String flash = driver.findElement(By.id("flash")).getText();
        Assertions.assertTrue(flash.contains("You logged out of the secure area!"));
    }
}
