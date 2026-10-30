package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class GrowlTest {

    @Test
    void displayNotification(Page page) {
        page.navigate("https://the-internet.herokuapp.com");

        // Step 1: add jQuery to the page, if it's not there
        if (!(Boolean) page.evaluate("() => 'jQuery' in window")) {
            page.addScriptTag(new Page.AddScriptTagOptions()
                    .setUrl("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"));
        }

        // Step 2: add jquery-growl to the page
        page.addScriptTag(new Page.AddScriptTagOptions()
                .setUrl("https://the-internet.herokuapp.com/js/vendor/jquery.growl.js"));

        // Step 3: add the jquery-growl styles to the page
        page.addStyleTag(new Page.AddStyleTagOptions()
                .setUrl("https://the-internet.herokuapp.com/css/jquery.growl.css"));

        // Step 4: display a message with jquery-growl
        page.evaluate("() => jQuery.growl({title: 'GET', message: '/'})");

        assertThat(page.locator("#growls .growl .growl-title")).hasText("GET");
        assertThat(page.locator("#growls .growl .growl-message")).hasText("/");
    }
}
