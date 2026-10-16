package com.elemental.selenium;

import java.util.Objects;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class HighlightTest {
    private static final String HIGHLIGHT_STYLE = "border: 2px solid red; border-style: dashed;";

    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/large");
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    private void highlight(WebElement element, int durationInSeconds) throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        // store the original style so it can be reset later
        String originalStyle = Objects.requireNonNullElse(element.getDomAttribute("style"), "");
        // style the element with a red dashed border
        js.executeScript("arguments[0].setAttribute('style', arguments[1])", element, HIGHLIGHT_STYLE);
        // keep the element highlighted for a spell and then revert
        if (durationInSeconds > 0) {
            Thread.sleep(durationInSeconds * 1000L);
            js.executeScript("arguments[0].setAttribute('style', arguments[1])", element, originalStyle);
        }
    }

    @Test
    public void highlightElement() throws InterruptedException {
        WebElement element = driver.findElement(By.id("sibling-2.3"));
        highlight(element, 0);
        Assertions.assertTrue(element.getDomAttribute("style").contains("dashed"));
    }

    @Test
    public void highlightRevertsTheStyle() throws InterruptedException {
        WebElement element = driver.findElement(By.id("sibling-2.3"));
        highlight(element, 1);
        String style = Objects.requireNonNullElse(element.getDomAttribute("style"), "");
        Assertions.assertFalse(style.contains("dashed"));
    }
}
