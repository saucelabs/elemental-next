package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LocatorsTest {
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
    public void firstLinkOnThePage() {
        page.go("https://the-internet.herokuapp.com/download");
        String link = page.find("a").attr("href");
        System.out.println(link);
        Assertions.assertTrue(link.contains("github.com"));
    }

    @Test
    public void firstLinkInTheContent() {
        page.go("https://the-internet.herokuapp.com/download");
        String link = page.find("#content a").attr("href");
        System.out.println(link);
        Assertions.assertTrue(link.contains("download/"));
    }

    @Test
    public void firstLinkInTheExample() {
        page.go("https://the-internet.herokuapp.com/download");
        String link = page.find("#content .example a").attr("href");
        System.out.println(link);
        Assertions.assertTrue(link.contains("download/"));
    }
}
