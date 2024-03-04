package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FramesTest {
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
    public void exampleOne() throws Exception {
        driver.get("https://the-internet.herokuapp.com/nested_frames");
        driver.switchTo().frame("frame-top");
        driver.switchTo().frame("frame-middle");
        Assertions.assertEquals("MIDDLE", driver.findElement(By.id("content")).getText());
    }

    @Test
    public void exampleTwo() throws Exception {
        driver.get("https://the-internet.herokuapp.com/tinymce");
        driver.switchTo().frame("mce_0_ifr");
        WebElement editor = driver.findElement(By.id("tinymce"));
        String beforeText = editor.getText();
        editor.clear();
        editor.sendKeys("Hello World!");
        String afterText = editor.getText();
        Assertions.assertNotEquals(beforeText, afterText);
        driver.switchTo().defaultContent();
        Assertions.assertEquals("An iFrame containing the TinyMCE WYSIWYG Editor",
            driver.findElement(By.cssSelector("h3")).getText());
    }

}