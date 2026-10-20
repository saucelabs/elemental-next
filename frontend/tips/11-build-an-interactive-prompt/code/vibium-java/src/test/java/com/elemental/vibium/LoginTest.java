package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LoginTest {
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

    // Each step is one of the commands that worked in the Vibium CLI session of the tip
    @Test
    public void login() {
        page.go("https://the-internet.herokuapp.com");
        page.find(new SelectorOptions().role("link").text("Form Authentication")).click();
        page.find("#username").fill("tomsmith");
        page.find("#password").fill("SuperSecretPassword!");
        page.find("button[type=submit]").click();
        Assertions.assertTrue(page.find("#flash").text().startsWith("You logged into a secure area!"));
    }
}
