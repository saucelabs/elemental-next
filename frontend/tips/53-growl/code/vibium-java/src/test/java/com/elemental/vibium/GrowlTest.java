package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.WaitOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class GrowlTest {
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
    public void displaysANotification() {
        page.go("https://the-internet.herokuapp.com");

        // Step 1: check for jQuery on the page, add it if need be
        page.evaluate("""
            if (!window.jQuery) {
                const jquery = document.createElement('script');
                jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
                document.head.appendChild(jquery);
            }
            """);
        page.waitForFunction("Boolean(window.jQuery)", new WaitOptions().timeout(10000));

        // Step 2: use jQuery to add jquery-growl to the page
        page.evaluate("window.jQuery.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

        // Step 3: use jQuery to add jquery-growl styles to the page
        page.evaluate("window.jQuery('head').append('<link rel=\"stylesheet\" "
            + "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />')");
        page.waitForFunction("Boolean(window.jQuery.growl)", new WaitOptions().timeout(10000));

        // Step 4: display a message with jquery-growl
        page.evaluate("window.jQuery.growl({title: 'GET', message: '/'})");

        Assertions.assertEquals("GET", page.find("#growls .growl .growl-title").text());
        Assertions.assertEquals("/", page.find("#growls .growl .growl-message").text());
    }
}
