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

public class ExceptionsTest {
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.go("https://the-internet.herokuapp.com/login");
        page.find("#username").fill("tomsmith");
        page.find("#password").fill("SuperSecretPassword!");
        page.find("#login button").click();
        page.find(".flash.success").waitUntil("visible");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    boolean isDisplayed(String selector) {
        try {
            return page.find(selector, new FindOptions().timeout(2000)).isVisible();
        } catch (ElementNotFoundException e) {
            // page.find throws an ElementNotFoundException when the element doesn't show up in time
            return false;
        }
    }

    @Test
    public void throwsAnExceptionWhenActingOnAMissingElement() {
        Assertions.assertThrows(ElementNotFoundException.class,
            () -> page.find("#login", new FindOptions().timeout(2000)).click());
    }

    @Test
    public void doesNotDisplayTheLoginForm() {
        Assertions.assertFalse(isDisplayed("#login"));
    }
}
