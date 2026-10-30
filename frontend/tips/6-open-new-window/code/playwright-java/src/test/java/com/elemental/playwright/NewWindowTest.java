package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class NewWindowTest {

    @Test
    void opensNewTab(Page page) {
        page.navigate("https://the-internet.herokuapp.com/windows");

        Page newPage = page.context().newPage();
        newPage.navigate("https://the-internet.herokuapp.com/typos");

        assertEquals(2, page.context().pages().size());
        assertThat(newPage.locator("h3")).hasText("Typos");
    }
}
