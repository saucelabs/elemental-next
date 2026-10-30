package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.TimeoutError;
import com.microsoft.playwright.assertions.LocatorAssertions;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.WaitForSelectorState;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

@UsePlaywright
class WaitingTest {

    private static final String BASE_URL = "https://the-internet.herokuapp.com/dynamic_loading";

    @ParameterizedTest
    @ValueSource(strings = {"1", "2"})
    void waitForElementToBeVisible(String example, Page page) {
        page.navigate(BASE_URL + "/" + example);
        page.locator("#start button").click();

        page.locator("#finish").waitFor(new Locator.WaitForOptions()
                .setState(WaitForSelectorState.VISIBLE)
                .setTimeout(10000));
        assertTrue(page.locator("#finish").textContent().contains("Hello World!"));
    }

    @Test
    void giveUpWhenWaitIsTooShort(Page page) {
        page.navigate(BASE_URL + "/2");
        page.locator("#start button").click();

        assertThrows(TimeoutError.class, () -> page.locator("#finish").waitFor(new Locator.WaitForOptions()
                .setState(WaitForSelectorState.VISIBLE)
                .setTimeout(2000)));
    }

    @Test
    void waitInsideAssertion(Page page) {
        page.navigate(BASE_URL + "/1");
        page.locator("#start button").click();

        assertThat(page.locator("#finish"))
                .hasText("Hello World!", new LocatorAssertions.HasTextOptions().setTimeout(10000));
    }
}
