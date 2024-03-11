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
import org.openqa.selenium.support.ui.WebDriverWait;

public class MultipleWindowsTest {
    WebDriver driver;
    WebDriverWait wait;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(2));
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
          driver.quit();
        }
    }

    @Test
    public void multipleWindows() throws InterruptedException {
        driver.get("https://the-internet.herokuapp.com/windows");
        driver.findElement(By.cssSelector(".example a")).click();
        List<String> windowHandles = new ArrayList<>(driver.getWindowHandles());
        driver.switchTo().window(windowHandles.get(0));
        Assertions.assertEquals("The Internet", driver.getTitle());
        driver.switchTo().window(windowHandles.get(1));
        // Waiting for the new window to have a title, then we consider it is loaded
        wait.until(driver -> !driver.getTitle().isEmpty());
        Assertions.assertEquals("New Window", driver.getTitle());
    }

    @Test
    public void multipleWindowsRedux() throws InterruptedException {
        driver.get("https://the-internet.herokuapp.com/windows");
        // Get initial window handle
        String firstWindow = driver.getWindowHandle();
        // Create a newWindow variable
        String newWindow = "";
        // Trigger new window to open
        driver.findElement(By.cssSelector(".example a")).click();
        // Grab all window handles
        List<String> windowHandles = new ArrayList<>(driver.getWindowHandles());
        // Iterate through window handles collection
        // Find the new window handle, storing it in the newWindow variable
        for (String window : windowHandles) {
            if (!window.equals(firstWindow)) {
                newWindow = window;
            }
        }
        // Switch to the first window & verify
        driver.switchTo().window(firstWindow);
        Assertions.assertEquals("The Internet", driver.getTitle());
        // Switch to the new window & verify
        driver.switchTo().window(newWindow);
        // Waiting for the new window to have a title, then we consider it is loaded
        wait.until(driver -> !driver.getTitle().isEmpty());
        Assertions.assertEquals("New Window", driver.getTitle());
    }

}