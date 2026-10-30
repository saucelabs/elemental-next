package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class DisabledElementTest {

    @Test
    void findDisabledOption(Page page) {
        page.navigate("https://the-internet.herokuapp.com/dropdown");

        assertThat(page.locator("option", new Page.LocatorOptions().setHasText("Please select an option")))
                .isDisabled();
        assertThat(page.locator("option", new Page.LocatorOptions().setHasText("Option 1"))).isEnabled();
    }
}
