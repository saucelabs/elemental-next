package com.elemental.selenium;

import java.time.Duration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GrowlTest {
    WebDriver driver;
    JavascriptExecutor js;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        js = (JavascriptExecutor) driver;
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void growlNotification() {
        driver.get("https://the-internet.herokuapp.com");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // Step 1: check for jQuery on the page, add it if need be
        js.executeScript("""
            if (!window.jQuery) {
                var jquery = document.createElement('script');
                jquery.type = 'text/javascript';
                jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
                document.getElementsByTagName('head')[0].appendChild(jquery);
            }""");
        wait.until(d -> (Boolean) js.executeScript("return !!window.jQuery"));

        // Step 2: use jQuery to add jquery-growl to the page
        js.executeScript("$.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

        // Step 3: use jQuery to add jquery-growl styles to the page
        js.executeScript("$('head').append('<link rel=\"stylesheet\" "
            + "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');");
        wait.until(d -> (Boolean) js.executeScript("return !!$.growl"));

        // Step 4: display a message with jquery-growl
        js.executeScript("$.growl({ title: 'GET', message: '/' });");

        WebElement notification =
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#growls .growl")));
        Assertions.assertEquals("GET", notification.findElement(By.className("growl-title")).getText());
        Assertions.assertEquals("/", notification.findElement(By.className("growl-message")).getText());
    }
}
