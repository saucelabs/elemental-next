package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.errors.ElementNotFoundException;
import com.vibium.types.FindOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class WaitingTest {
    private static final String BASE_URL = "https://the-internet.herokuapp.com/dynamic_loading";

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

    @ParameterizedTest
    @ValueSource(strings = {"1", "2"})
    public void waitsForTheElementToBeVisible(String example) {
        page.go(BASE_URL + "/" + example);
        page.find("#start button").click();

        page.find("#finish").waitUntil("visible", new FindOptions().timeout(10000));
        Assertions.assertEquals("Hello World!", page.find("#finish").text());
    }

    @Test
    public void givesUpWhenTheWaitIsTooShort() {
        page.go(BASE_URL + "/2");
        page.find("#start button").click();

        Assertions.assertThrows(ElementNotFoundException.class,
            () -> page.find("#finish", new FindOptions().timeout(2000)));
    }
}
