package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.StartOptions;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public class MultipleBrowsersParallelTest {
    private static final List<String> BROWSERS = List.of("chrome", "firefox", "MicrosoftEdge");

    static void runOn(String browserName) {
        try {
            Sauce.Session session = Sauce.startSession(browserName,
                "Elemental Selenium - Tip 42 - Vibium Java - " + browserName);
            Browser browser = Vibium.start(new StartOptions().connectURL(session.webSocketUrl()));
            boolean passed = false;
            try {
                Page page = browser.page();
                page.go("https://the-internet.herokuapp.com");
                Assertions.assertEquals("The Internet", page.title());
                passed = true;
            } finally {
                browser.stop();
                Sauce.endSession(session, passed);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    public void loadsThePageOnEveryBrowser() {
        Assumptions.assumeTrue(System.getenv("SAUCE_USERNAME") != null && System.getenv("SAUCE_ACCESS_KEY") != null,
            "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");

        List<CompletableFuture<Void>> runs = BROWSERS.stream()
            .map(browserName -> CompletableFuture.runAsync(() -> runOn(browserName)))
            .toList();
        // join() waits for every browser, and throws the error of the first one that failed
        runs.forEach(CompletableFuture::join);
    }
}
