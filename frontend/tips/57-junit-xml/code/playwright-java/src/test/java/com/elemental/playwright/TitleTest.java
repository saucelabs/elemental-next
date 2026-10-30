package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class TitleTest {

    @Test
    void hasTheRightTitle(Page page) {
        page.navigate("https://the-internet.herokuapp.com");
        assertThat(page).hasTitle("The Internet");
    }
}
