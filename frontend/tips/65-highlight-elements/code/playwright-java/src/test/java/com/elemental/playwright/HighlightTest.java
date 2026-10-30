package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.regex.Pattern;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class HighlightTest {

    private static final String HIGHLIGHT_STYLE = "border: 2px solid red; border-style: dashed;";

    private static void highlight(Locator element, int duration) {
        // store the original style so it can be reset later
        String style = element.getAttribute("style");
        String originalStyle = style == null ? "" : style;
        // style the element with a red dashed border
        element.evaluate("(el, style) => el.setAttribute('style', style)", HIGHLIGHT_STYLE);
        // keep the element highlighted for a spell and then revert
        if (duration > 0) {
            element.page().waitForTimeout(duration * 1000);
            element.evaluate("(el, style) => el.setAttribute('style', style)", originalStyle);
        }
    }

    @BeforeEach
    void visitLargePage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/large");
    }

    @Test
    void highlightElement(Page page) {
        Locator element = page.locator("[id=\"sibling-2.3\"]");
        highlight(element, 0);
        assertThat(element).hasAttribute("style", Pattern.compile("dashed"));
    }

    @Test
    void revertStyleAfterward(Page page) {
        Locator element = page.locator("[id=\"sibling-2.3\"]");
        highlight(element, 1);
        assertThat(element).not().hasAttribute("style", Pattern.compile("dashed"));
    }
}
