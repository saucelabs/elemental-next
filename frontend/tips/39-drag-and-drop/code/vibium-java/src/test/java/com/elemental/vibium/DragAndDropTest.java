package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class DragAndDropTest {
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
    public void swapsTheColumns() {
        page.go("https://the-internet.herokuapp.com/drag_and_drop");

        page.find("#column-a").dragTo(page.find("#column-b"));

        Assertions.assertEquals("B", page.find("#column-a").text());
        Assertions.assertEquals("A", page.find("#column-b").text());
    }
}
