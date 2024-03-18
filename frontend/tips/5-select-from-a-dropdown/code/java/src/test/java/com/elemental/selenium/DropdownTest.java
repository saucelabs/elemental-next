package com.elemental.selenium;

import java.time.Duration;
import java.util.List;
import java.util.ArrayList;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class DropdownTest {
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
    public void dropdownTest() {
        driver.get("https://the-internet.herokuapp.com/dropdown");
        WebElement dropdownList = driver.findElement(By.id("dropdown"));
        List<WebElement> options = dropdownList.findElements(By.tagName("option"));
        for (int i = 0; i < options.size(); i++) {
            if (options.get(i).getText().equals("Option 1")) {
                options.get(i).click();
            }
        }
        String selectedOption = "";
        for (int i = 0; i < options.size(); i++) {
            if (options.get(i).isSelected()) {
                selectedOption = options.get(i).getText();
            }
        }
        Assertions.assertEquals("Option 1", selectedOption);
    }

    @Test
    public void dropdownTestRedux() {
        driver.get("https://the-internet.herokuapp.com/dropdown");
        Select selectList = new Select(driver.findElement(By.id("dropdown")));
        selectList.selectByVisibleText("Option 1");
        // You could also use select.selectByValue("1");
        Assertions.assertEquals("Option 1", selectList.getFirstSelectedOption().getText());
    }

}