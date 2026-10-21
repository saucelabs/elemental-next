package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Dialog;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AlertsTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/javascript_alerts");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void acceptsTheConfirmation() {
        page.onDialog(Dialog::accept);
        page.find(new SelectorOptions().role("button").text("Click for JS Confirm")).click();

        Assertions.assertEquals("You clicked: Ok", page.find("#result").text());
    }

    @Test
    public void dismissesTheConfirmation() {
        page.onDialog(Dialog::dismiss);
        page.find(new SelectorOptions().role("button").text("Click for JS Confirm")).click();

        Assertions.assertEquals("You clicked: Cancel", page.find("#result").text());
    }
}
