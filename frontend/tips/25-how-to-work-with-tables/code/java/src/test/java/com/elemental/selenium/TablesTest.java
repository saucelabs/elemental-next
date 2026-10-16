package com.elemental.selenium;

import java.util.Comparator;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TablesTest {
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/tables");
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    private List<String> texts(String locator) {
        return driver.findElements(By.cssSelector(locator)).stream().map(WebElement::getText).toList();
    }

    private List<Double> dues(String locator) {
        return texts(locator).stream().map(due -> Double.parseDouble(due.replace("$", ""))).toList();
    }

    @Test
    public void sortNumberAscending() {
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();
        List<Double> dueValues = dues("#table1 tbody tr td:nth-of-type(4)");
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }

    @Test
    public void sortNumberDescending() {
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();
        List<Double> dueValues = dues("#table1 tbody tr td:nth-of-type(4)");
        Assertions.assertEquals(dueValues.stream().sorted(Comparator.reverseOrder()).toList(), dueValues);
    }

    @Test
    public void sortTextAscending() {
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(3)")).click();
        List<String> emails = texts("#table1 tbody tr td:nth-of-type(3)");
        Assertions.assertEquals(emails.stream().sorted().toList(), emails);
    }

    @Test
    public void sortNumberAscendingWithSemanticLocators() {
        driver.findElement(By.cssSelector("#table2 thead .dues")).click();
        List<Double> dueValues = dues("#table2 tbody .dues");
        Assertions.assertEquals(dueValues.stream().sorted().toList(), dueValues);
    }
}
