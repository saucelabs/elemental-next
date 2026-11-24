package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Element;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class HoversTest {
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
    public void displaysTheCaptionOnHover() {
        page.go("https://the-internet.herokuapp.com/hovers");
        Element anAvatar = page.find(new SelectorOptions().css(".figure"));
        Element caption = anAvatar.find(new SelectorOptions().css(".figcaption"));
        Assertions.assertFalse(caption.isVisible());

        anAvatar.hover();
        caption.waitUntil("visible");
        Assertions.assertTrue(caption.isVisible());
    }
}
