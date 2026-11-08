package com.elemental.selenium;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Base64;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Pdf;
import org.openqa.selenium.PrintsPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.print.PrintOptions;

public class PrintToPdfTest {
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
    public void printThePageToPdf() throws IOException {
        driver.get("https://the-internet.herokuapp.com/tables");

        PrintOptions options = new PrintOptions();
        options.setOrientation(PrintOptions.Orientation.LANDSCAPE);
        Pdf pdf = ((PrintsPage) driver).print(options);
        byte[] bytes = Base64.getDecoder().decode(pdf.getContent());

        // Every PDF file starts with %PDF-
        Assertions.assertArrayEquals("%PDF-".getBytes(StandardCharsets.US_ASCII), Arrays.copyOf(bytes, 5));
        Path path = Files.createTempDirectory("pdf").resolve("tables.pdf");
        Files.write(path, bytes);
        System.out.println("Saved " + path);
    }
}
