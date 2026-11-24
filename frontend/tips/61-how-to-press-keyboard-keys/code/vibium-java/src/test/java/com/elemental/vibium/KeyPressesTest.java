package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class KeyPressesTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/key_presses");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void sendsKeysToAnElement() {
        page.find(new SelectorOptions().css("#target")).press("Space");
        Assertions.assertEquals("You entered: SPACE", page.find(new SelectorOptions().css("#result")).text());
    }

    @Test
    public void sendsKeysWithoutAnElement() {
        page.keyboard().press("Tab");
        Assertions.assertEquals("You entered: TAB", page.find(new SelectorOptions().css("#result")).text());
    }
}
