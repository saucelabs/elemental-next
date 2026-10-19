package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Objects;

public class HighlightTest {
    private static final String HIGHLIGHT_STYLE = "border: 2px solid red; border-style: dashed;";

    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/large");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    void highlight(String selector, int duration) {
        String element = "document.querySelector('" + selector + "')";
        // store the original style so it can be reset later
        String originalStyle = Objects.requireNonNullElse(page.find(selector).attr("style"), "");
        // style the element with a red dashed border
        page.evaluate(element + ".setAttribute('style', '" + HIGHLIGHT_STYLE + "')");
        // keep the element highlighted for a spell and then revert
        if (duration > 0) {
            page.sleep(duration * 1000L);
            page.evaluate(element + ".setAttribute('style', '" + originalStyle + "')");
        }
    }

    @Test
    public void highlightsAnElement() {
        highlight("[id=\"sibling-2.3\"]", 0);
        Assertions.assertTrue(page.find("[id=\"sibling-2.3\"]").attr("style").contains("dashed"));
    }

    @Test
    public void revertsTheStyleAfterward() {
        highlight("[id=\"sibling-2.3\"]", 1);
        String style = Objects.requireNonNullElse(page.find("[id=\"sibling-2.3\"]").attr("style"), "");
        Assertions.assertFalse(style.contains("dashed"));
    }
}
