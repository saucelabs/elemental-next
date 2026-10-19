package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.StartOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class HeadlessTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start(new StartOptions().headless(true));
        page = browser.page();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void loadsThePage() {
        page.go("https://the-internet.herokuapp.com");
        Assertions.assertEquals("The Internet", page.title());

        String userAgent = (String) page.evaluate("navigator.userAgent");
        System.out.println(userAgent);
        Assertions.assertTrue(userAgent.contains("HeadlessChrome"));
    }
}
