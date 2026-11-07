package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class ShadowDomTest {

    @BeforeEach
    void openPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/shadowdom_advanced");
    }

    @Test
    void clickAButtonInsideNestedShadowRoots(Page page) {
        // CSS locators look inside open shadow roots, so there is no need to name the shadow hosts
        page.locator("#inner-button").click();

        assertThat(page.locator("#nested-result")).hasText("You clicked the button in the inner shadow root");
    }

    @Test
    void xpathDoesNotLookInsideShadowRoots(Page page) {
        assertThat(page.locator("xpath=//button[@id='inner-button']")).hasCount(0);
    }
}
