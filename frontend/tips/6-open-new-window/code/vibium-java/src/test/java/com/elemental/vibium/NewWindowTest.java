package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class NewWindowTest {
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
    public void opensNewTab() {
        page.go("https://the-internet.herokuapp.com/windows");

        Page newPage = browser.newPage();
        newPage.go("https://the-internet.herokuapp.com/typos");

        Assertions.assertEquals(2, browser.pages().size());
        Assertions.assertEquals("Typos", newPage.find("h3").text());
    }
}
