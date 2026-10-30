package com.elemental.playwright;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import java.util.ArrayList;
import java.util.List;

// Wraps a page, so that visiting a URL and clicking log what they do
public class LoggingPage {

    private final Page page;

    // The messages logged during the test, so the test can check them
    public final List<String> messages = new ArrayList<>();

    public LoggingPage(Page page) {
        this.page = page;
    }

    private void log(String message) {
        System.out.println(message);
        messages.add(message);
    }

    public void navigate(String url) {
        page.navigate(url);
        log("Navigated to " + url);
    }

    public void click(String selector) {
        Locator element = page.locator(selector);
        log("Clicking on " + element.textContent());
        String preClickUrl = page.url();
        element.click();
        page.waitForLoadState();
        if (!page.url().equals(preClickUrl)) {
            log("URL changed to " + page.url());
        }
    }
}
