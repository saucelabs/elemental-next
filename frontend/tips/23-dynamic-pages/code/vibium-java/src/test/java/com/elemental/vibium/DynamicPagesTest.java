package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.FindOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class DynamicPagesTest {
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

    // Example 1 has a hidden element, example 2 renders the element after the click
    @ParameterizedTest
    @ValueSource(strings = {"1", "2"})
    public void waitsForTheElement(String example) {
        page.go("https://the-internet.herokuapp.com/dynamic_loading/" + example);
        page.find("#start button").click();

        page.find("#finish").waitUntil("visible", new FindOptions().timeout(10000));
        Assertions.assertTrue(page.find("#finish").isVisible());
    }
}
