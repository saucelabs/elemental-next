package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

public class MultipleWindowsTest {
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
    public void multipleWindows() throws Exception {
        page.go("https://the-internet.herokuapp.com/windows");

        CompletableFuture<Page> newWindow = new CompletableFuture<>();
        browser.onPage(newWindow::complete);
        page.find(".example a").click();
        Page newPage = newWindow.get(10, TimeUnit.SECONDS);
        newPage.waitForLoad();

        Assertions.assertEquals("The Internet", page.title());
        Assertions.assertEquals("New Window", newPage.title());
    }
}
