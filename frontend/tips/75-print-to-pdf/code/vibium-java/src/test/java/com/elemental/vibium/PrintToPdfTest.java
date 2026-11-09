package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PrintToPdfTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void printThePageToPdf() throws IOException {
        page.go("https://the-internet.herokuapp.com/tables");

        byte[] pdf = page.pdf();

        // Every PDF file starts with %PDF-
        Assertions.assertArrayEquals("%PDF-".getBytes(StandardCharsets.US_ASCII), Arrays.copyOf(pdf, 5));
        Path path = Files.createTempDirectory("pdf").resolve("tables.pdf");
        Files.write(path, pdf);
        System.out.println("Saved " + path);
    }
}
