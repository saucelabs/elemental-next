package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.FrameLocator;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class FramesTest {

    @Test
    void nestedFrames(Page page) {
        page.navigate("https://the-internet.herokuapp.com/nested_frames");

        FrameLocator middleFrame = page.frameLocator("frame[name=\"frame-top\"]")
                .frameLocator("frame[name=\"frame-middle\"]");

        assertThat(middleFrame.locator("#content")).hasText("MIDDLE");
    }

    @Test
    void iframe(Page page) {
        page.navigate("https://the-internet.herokuapp.com/tinymce");

        Locator editor = page.frameLocator("#mce_0_ifr").locator("#tinymce");
        editor.fill("Hello World!");

        assertThat(editor).hasText("Hello World!");
        assertThat(page.locator("h3")).hasText("An iFrame containing the TinyMCE WYSIWYG Editor");
    }
}
