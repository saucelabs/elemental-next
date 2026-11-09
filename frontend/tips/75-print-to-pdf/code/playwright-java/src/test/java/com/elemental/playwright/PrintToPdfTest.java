package com.elemental.playwright;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

@UsePlaywright
class PrintToPdfTest {

    @Test
    void printThePageToPdf(Page page) throws IOException {
        page.navigate("https://the-internet.herokuapp.com/tables");

        Path path = Files.createTempDirectory("pdf").resolve("tables.pdf");
        byte[] pdf = page.pdf(new Page.PdfOptions().setPath(path).setLandscape(true));

        // Every PDF file starts with %PDF-
        Assertions.assertArrayEquals("%PDF-".getBytes(StandardCharsets.US_ASCII), Arrays.copyOf(pdf, 5));
        System.out.println("Saved " + path);
    }
}
