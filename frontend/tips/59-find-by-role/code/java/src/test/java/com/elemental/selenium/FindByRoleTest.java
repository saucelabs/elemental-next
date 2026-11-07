package com.elemental.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FindByRoleTest {
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

    WebElement findByRole(String role, String name) {
        // The browser computes the role and the accessible name of each element, as a screen reader sees them
        for (WebElement element : driver.findElements(By.cssSelector("[role=\"" + role + "\"]"))) {
            if (element.getAriaRole().equals(role) && element.getAccessibleName().equals(name)) {
                return element;
            }
        }
        throw new NoSuchElementException("No " + role + " named \"" + name + "\"");
    }

    @Test
    public void pickAFruit() {
        driver.get("https://the-internet.herokuapp.com/custom_dropdown");

        findByRole("combobox", "Fruit").click();
        findByRole("option", "Mango").click();

        Assertions.assertEquals("Mango", findByRole("combobox", "Fruit").getText());
        Assertions.assertEquals("Selected: mango", driver.findElement(By.id("result")).getText());
    }
}
