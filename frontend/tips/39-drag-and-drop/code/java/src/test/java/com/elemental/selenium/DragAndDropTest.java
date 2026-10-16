package com.elemental.selenium;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DragAndDropTest {
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
    public void dragAndDrop() throws Exception {
        driver.get("https://the-internet.herokuapp.com/drag_and_drop");
        String dndJavascript;
        try (InputStream file = getClass().getResourceAsStream("/dnd.js")) {
            dndJavascript = new String(file.readAllBytes(), StandardCharsets.UTF_8);
        }
        ((JavascriptExecutor) driver).executeScript(
            dndJavascript + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});");
        Assertions.assertEquals("B", driver.findElement(By.id("column-a")).getText());
        Assertions.assertEquals("A", driver.findElement(By.id("column-b")).getText());
    }
}
