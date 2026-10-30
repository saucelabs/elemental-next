package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.TimeoutError;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class ExceptionsTest {

    @BeforeEach
    void login(Page page) {
        page.navigate("https://the-internet.herokuapp.com/login");
        page.locator("#username").fill("tomsmith");
        page.locator("#password").fill("SuperSecretPassword!");
        page.locator("#login button").click();
        assertThat(page.locator(".flash.success")).isVisible();
    }

    @Test
    void errorWhenActingOnMissingElement(Page page) {
        TimeoutError error = assertThrows(TimeoutError.class,
                () -> page.locator("#login").click(new Locator.ClickOptions().setTimeout(2000)));
        assertTrue(error.getMessage().contains("Timeout 2000ms exceeded"));
    }

    @Test
    void loginFormNotDisplayed(Page page) {
        assertFalse(page.locator("#login").isVisible());
    }
}
