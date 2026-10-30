package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class KeyPressesTest {

    @BeforeEach
    void visitKeyPressesPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/key_presses");
    }

    @Test
    void pressKeyOnElement(Page page) {
        page.locator("#target").press("Space");
        assertThat(page.locator("#result")).hasText("You entered: SPACE");
    }

    @Test
    void pressKeyWithoutElement(Page page) {
        page.keyboard().press("Tab");
        assertThat(page.locator("#result")).hasText("You entered: TAB");
    }
}
