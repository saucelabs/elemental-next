package com.elemental.selenium;

import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringDecorator;

public class WrapperTest {
    WebDriver driver;
    Wrapper listener;

    @BeforeEach
    public void beforeEach() {
        listener = new Wrapper();
        driver = new EventFiringDecorator<>(listener).decorate(new FirefoxDriver());
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void listenerLogsEveryAction() {
        driver.get("https://the-internet.herokuapp.com");
        driver.findElement(By.linkText("Checkboxes")).click();

        Assertions.assertEquals(List.of(
            "Navigated to https://the-internet.herokuapp.com",
            "Finding element By.linkText: Checkboxes",
            "Found element By.linkText: Checkboxes",
            "Clicking on Checkboxes",
            "URL changed to https://the-internet.herokuapp.com/checkboxes"), listener.getMessages());
    }
}
