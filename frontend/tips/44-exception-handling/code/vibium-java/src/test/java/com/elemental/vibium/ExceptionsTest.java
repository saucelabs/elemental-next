package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.errors.ElementNotFoundException;
import com.vibium.types.SelectorOptions;
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
        page.find(new SelectorOptions().css("#username")).fill("tomsmith");
        page.find(new SelectorOptions().css("#password")).fill("SuperSecretPassword!");
        page.find(new SelectorOptions().css("#login button")).click();
        page.find(new SelectorOptions().css(".flash.success")).waitUntil("visible");
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    boolean isDisplayed(String selector) {
        try {
            return page.find(new SelectorOptions().css(selector).timeout(2000)).isVisible();
        } catch (ElementNotFoundException e) {
            // page.find throws an ElementNotFoundException when the element doesn't show up in time
            return false;
        }
    }

    @Test
    public void throwsAnExceptionWhenActingOnAMissingElement() {
        Assertions.assertThrows(ElementNotFoundException.class,
            () -> page.find(new SelectorOptions().css("#login").timeout(2000)).click());
    }

    @Test
    public void doesNotDisplayTheLoginForm() {
        Assertions.assertFalse(isDisplayed("#login"));
    }
}
