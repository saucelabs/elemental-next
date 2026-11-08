package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.FulfillOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MockResponsesTest {
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
    public void pageShowsTheMockedAnswer() {
        page.route("**/slow_api/data?*", route -> route.fulfill(new FulfillOptions()
                .contentType("application/json")
                .body("{\"message\": \"Hello from the mock\"}")));

        page.go("https://the-internet.herokuapp.com/slow_api");
        page.find("#call-api").click();

        // find() waits for the answer to show up in the list
        Assertions.assertEquals("200: Hello from the mock", page.find("#attempts li").text());
        Assertions.assertEquals("Hello from the mock", page.find("#status-text").text());
    }
}
