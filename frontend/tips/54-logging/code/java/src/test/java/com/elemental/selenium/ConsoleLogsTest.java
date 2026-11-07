package com.elemental.selenium;

import java.time.Duration;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArrayList;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.bidi.module.LogInspector;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ConsoleLogsTest {
    ChromeDriver driver;
    LogInspector logInspector;

    @BeforeEach
    public void beforeEach() {
        ChromeOptions options = new ChromeOptions();
        // Turns on WebDriver BiDi, which sends the console messages and errors of the page to the test
        options.enableBiDi();
        driver = new ChromeDriver(options);
        logInspector = new LogInspector(driver);
    }

    @AfterEach
    public void afterEach() {
        if (logInspector != null) {
            logInspector.close();
        }
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void consoleMessagesAndErrors() {
        List<String> messages = new CopyOnWriteArrayList<>();
        List<String> errors = new CopyOnWriteArrayList<>();
        logInspector.onConsoleEntry(entry -> messages.add(entry.getLevel() + ": " + entry.getText()));
        logInspector.onJavaScriptException(entry -> errors.add(entry.getText()));

        driver.get("https://the-internet.herokuapp.com/network_console");
        driver.findElement(By.id("log-console")).click();
        driver.findElement(By.id("throw-error")).click();

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until(d -> messages.size() == 3 && errors.size() == 1);
        // The messages can arrive in any order
        Assertions.assertEquals(Set.of(
                "info: the-internet: a log message",
                "warn: the-internet: a warning",
                "error: the-internet: an error message"), Set.copyOf(messages));
        Assertions.assertEquals(List.of("Error: the-internet: thrown on purpose"), errors);
    }
}
