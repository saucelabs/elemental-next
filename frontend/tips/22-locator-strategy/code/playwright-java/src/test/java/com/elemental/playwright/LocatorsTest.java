package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class LocatorsTest {

    @BeforeEach
    void visitDownloadPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/download");
    }

    @Test
    void firstLinkOnThePage(Page page) {
        String link = page.locator("a").first().getAttribute("href");
        System.out.println(link);
        assertTrue(link.contains("github.com"));
    }

    @Test
    void firstLinkInTheContent(Page page) {
        String link = page.locator("#content a").first().getAttribute("href");
        System.out.println(link);
        assertTrue(link.contains("download/"));
    }

    @Test
    void firstLinkInTheExample(Page page) {
        String link = page.locator("#content .example a").first().getAttribute("href");
        System.out.println(link);
        assertTrue(link.contains("download/"));
    }
}
