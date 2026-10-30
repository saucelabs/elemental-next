package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class HoversTest {

    @Test
    void displayCaptionOnHover(Page page) {
        page.navigate("https://the-internet.herokuapp.com/hovers");
        Locator anAvatar = page.locator(".figure").first();
        Locator caption = anAvatar.locator(".figcaption");
        assertThat(caption).isHidden();

        anAvatar.hover();
        assertThat(caption).isVisible();
    }
}
