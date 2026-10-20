package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Element;
import com.vibium.Page;
import com.vibium.Vibium;
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
        Element anAvatar = page.find(".figure");
        Element caption = anAvatar.find(".figcaption");
        Assertions.assertFalse(caption.isVisible());

        anAvatar.hover();
        caption.waitUntil("visible");
        Assertions.assertTrue(caption.isVisible());
    }
}
