package com.elemental.vibium;

import com.vibium.Element;
import com.vibium.Page;

import java.util.ArrayList;
import java.util.List;

// Wraps a Vibium page so that going to a URL and clicking log what they do
public class LoggingPage {
    private final Page page;
    // The messages logged during the test, so the test can check them
    final List<String> messages = new ArrayList<>();

    public LoggingPage(Page page) {
        this.page = page;
    }

    void log(String message) {
        System.out.println(message);
        messages.add(message);
    }

    public void go(String url) {
        page.go(url);
        log("Navigated to " + url);
    }

    public void click(String selector) {
        Element element = page.find(selector);
        log("Clicking on " + element.text());
        String preClickUrl = page.url();
        element.click();
        page.waitForLoad();
        String currentUrl = page.url();
        if (!currentUrl.equals(preClickUrl)) {
            log("URL changed to " + currentUrl);
        }
    }
}
