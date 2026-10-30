package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.SelectOption;
import org.junit.jupiter.api.Test;

@UsePlaywright
class DropdownTest {

    @Test
    void selectFromADropdown(Page page) {
        page.navigate("https://the-internet.herokuapp.com/dropdown");

        page.locator("#dropdown").selectOption(new SelectOption().setLabel("Option 1"));

        assertThat(page.locator("#dropdown option:checked")).hasText("Option 1");
    }
}
