package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

public class TaggingTest {
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
    @Tag("smoke")
    public void title() {
        page.go("https://the-internet.herokuapp.com");
        Assertions.assertEquals("The Internet", page.title());
    }

    // This test is not finished yet, so it fails. Since it's tagged as wip, it doesn't run (see pom.xml).
    @Test
    @Tag("wip")
    public void workInProgress() {
        page.go("https://the-internet.herokuapp.com");
        Assertions.assertEquals("Not finished yet", page.title());
    }
}
