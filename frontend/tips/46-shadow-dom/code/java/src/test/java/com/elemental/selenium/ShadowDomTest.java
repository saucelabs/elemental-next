package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class ShadowDomTest {
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/shadowdom_advanced");
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void clickAButtonInsideNestedShadowRoots() {
        SearchContext outerRoot = driver.findElement(By.id("outer-card")).getShadowRoot();
        SearchContext innerRoot = outerRoot.findElement(By.cssSelector("#inner-card")).getShadowRoot();
        innerRoot.findElement(By.cssSelector("#inner-button")).click();

        Assertions.assertEquals("You clicked the button in the inner shadow root",
                driver.findElement(By.id("nested-result")).getText());
    }

    @Test
    public void aNormalLocatorDoesNotFindIt() {
        Assertions.assertTrue(driver.findElements(By.cssSelector("#inner-button")).isEmpty());
    }
}
