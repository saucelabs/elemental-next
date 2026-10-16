package com.elemental.selenium;

import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.events.WebDriverListener;

public class Wrapper implements WebDriverListener {
    private final List<String> messages = new ArrayList<>();
    private WebDriver driver;
    private String preClickUrl;

    public List<String> getMessages() {
        return messages;
    }

    private void log(String message) {
        System.out.println(message);
        messages.add(message);
    }

    @Override
    public void afterGet(WebDriver driver, String url) {
        this.driver = driver;
        log("Navigated to " + url);
    }

    @Override
    public void beforeFindElement(WebDriver driver, By locator) {
        log("Finding element " + locator);
    }

    @Override
    public void afterFindElement(WebDriver driver, By locator, WebElement result) {
        log("Found element " + locator);
    }

    @Override
    public void beforeClick(WebElement element) {
        log("Clicking on " + element.getText());
        preClickUrl = driver.getCurrentUrl();
    }

    @Override
    public void afterClick(WebElement element) {
        if (!driver.getCurrentUrl().equals(preClickUrl)) {
            log("URL changed to " + driver.getCurrentUrl());
        }
    }
}
