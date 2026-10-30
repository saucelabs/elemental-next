package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.assertions.LocatorAssertions;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

@UsePlaywright
class DynamicPagesTest {

    @ParameterizedTest(name = "example {0}")
    @ValueSource(strings = {"1", "2"})
    void waitForElement(String example, Page page) {
        page.navigate("https://the-internet.herokuapp.com/dynamic_loading/" + example);
        page.locator("#start button").click();

        assertThat(page.locator("#finish")).isVisible(new LocatorAssertions.IsVisibleOptions().setTimeout(10000));
    }
}
