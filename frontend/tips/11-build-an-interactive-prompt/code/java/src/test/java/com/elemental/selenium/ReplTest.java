package com.elemental.selenium;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.io.StringReader;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class ReplTest {
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
    public void evaluatesSeleniumCommands() throws Exception {
        String commands = String.join("\n",
            "driver.get(\"https://the-internet.herokuapp.com\");",
            "driver.getTitle()",
            "driver.findElement(By.id(\"does-not-exist\"))",
            "q");
        ByteArrayOutputStream output = new ByteArrayOutputStream();

        Repl.run(driver, new BufferedReader(new StringReader(commands)), new PrintStream(output, true));

        List<String> lines = Arrays.stream(output.toString().split(">> "))
            .map(String::trim)
            .filter(line -> !line.isEmpty())
            .toList();
        Assertions.assertEquals("\"The Internet\"", lines.get(0));
        Assertions.assertTrue(lines.get(1).startsWith("org.openqa.selenium.NoSuchElementException"), lines.get(1));
        Assertions.assertEquals("Quitting...", lines.get(2));
    }
}
