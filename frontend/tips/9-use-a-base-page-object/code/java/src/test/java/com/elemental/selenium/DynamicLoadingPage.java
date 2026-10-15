package com.elemental.selenium;

import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DynamicLoadingPage extends BasePage {
    private static final By START_BUTTON = By.cssSelector("#start button");
    private static final By FINISH_TEXT = By.id("finish");

    public DynamicLoadingPage(WebDriver driver) {
        super(driver);
        visit("/dynamic_loading/2");
        Assertions.assertEquals("The Internet", title());
    }

    public void start() {
        click(START_BUTTON);
    }

    public String finishText() {
        waitFor(FINISH_TEXT);
        return textOf(FINISH_TEXT);
    }
}
