package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.AriaRole;
import org.junit.jupiter.api.Test;

@UsePlaywright
class FindByRoleTest {

    @Test
    void pickAFruit(Page page) {
        page.navigate("https://the-internet.herokuapp.com/custom_dropdown");

        page.getByRole(AriaRole.COMBOBOX, new Page.GetByRoleOptions().setName("Fruit")).click();
        page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName("Mango")).click();

        assertThat(page.getByRole(AriaRole.COMBOBOX, new Page.GetByRoleOptions().setName("Fruit"))).hasText("Mango");
        assertThat(page.locator("#result")).hasText("Selected: mango");
    }
}
