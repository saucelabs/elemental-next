package com.elemental.selenium;

import java.time.Duration;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DynamicLoadingPage {
    private static final String URL = "https://the-internet.herokuapp.com/dynamic_loading/2";
    private static final By START_BUTTON = By.cssSelector("#start button");
    private static final By FINISH_TEXT = By.id("finish");

    private final WebDriver driver;

    public DynamicLoadingPage(WebDriver driver) {
        this.driver = driver;
        driver.get(URL);
        Assertions.assertEquals("The Internet", driver.getTitle());
    }

    public void start() {
        driver.findElement(START_BUTTON).click();
    }

    public void waitForFinish() {
        new WebDriverWait(driver, Duration.ofSeconds(10))
            .until(d -> d.findElement(FINISH_TEXT).isDisplayed());
    }

    public String finishText() {
        return driver.findElement(FINISH_TEXT).getText();
    }
}
