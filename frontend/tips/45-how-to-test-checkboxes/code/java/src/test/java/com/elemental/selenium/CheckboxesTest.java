package com.elemental.selenium;

import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CheckboxesTest {
    WebDriver driver;
    List<WebElement> checkboxes;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/checkboxes");
        checkboxes = driver.findElements(By.cssSelector("input[type=\"checkbox\"]"));
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void attributeLookup() {
        checkboxes.forEach(checkbox -> System.out.println(checkbox.getDomAttribute("checked")));
        Assertions.assertNull(checkboxes.getFirst().getDomAttribute("checked"));
        Assertions.assertNotNull(checkboxes.getLast().getDomAttribute("checked"));
    }

    @Test
    public void isSelected() {
        checkboxes.forEach(checkbox -> System.out.println(checkbox.isSelected()));
        Assertions.assertFalse(checkboxes.getFirst().isSelected());
        Assertions.assertTrue(checkboxes.getLast().isSelected());
    }
}
