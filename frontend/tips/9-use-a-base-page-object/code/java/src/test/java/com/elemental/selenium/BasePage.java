package com.elemental.selenium;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {
    private static final String BASE_URL = "https://the-internet.herokuapp.com";

    protected final WebDriver driver;

    public BasePage(WebDriver driver) {
        this.driver = driver;
    }

    protected void visit(String path) {
        driver.get(BASE_URL + path);
    }

    protected WebElement find(By locator) {
        return driver.findElement(locator);
    }

    protected void click(By locator) {
        find(locator).click();
    }

    protected void type(By locator, String text) {
        find(locator).clear();
        find(locator).sendKeys(text);
    }

    protected boolean isDisplayed(By locator) {
        try {
            return find(locator).isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    protected String textOf(By locator) {
        return find(locator).getText();
    }

    protected String title() {
        return driver.getTitle();
    }

    protected void waitFor(By locator) {
        new WebDriverWait(driver, Duration.ofSeconds(10)).until(d -> isDisplayed(locator));
    }
}
