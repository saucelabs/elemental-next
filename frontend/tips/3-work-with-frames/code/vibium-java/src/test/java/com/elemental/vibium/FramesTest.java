package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Element;
import com.vibium.Page;
import com.vibium.Vibium;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class FramesTest {
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
    public void nestedFrames() {
        page.go("https://the-internet.herokuapp.com/nested_frames");

        Page topFrame = page.frame("frame-top");
        Page middleFrame = topFrame.frame("frame-middle");

        Assertions.assertEquals("MIDDLE", middleFrame.find("#content").text());
    }

    @Test
    public void iframe() {
        page.go("https://the-internet.herokuapp.com/tinymce");

        // The editor's iframe has no name and no URL, so we wait for it and take the only frame of the page
        page.find("#mce_0_ifr");
        Page editorFrame = page.frames().get(0);
        Element editor = editorFrame.find("#tinymce");
        String beforeText = editor.text();
        editor.clear();
        editor.type("Hello World!");
        Assertions.assertNotEquals(beforeText, editor.text());

        Assertions.assertEquals("An iFrame containing the TinyMCE WYSIWYG Editor", page.find("h3").text());
    }
}
