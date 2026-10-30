package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

@UsePlaywright
class TaggingTest {

    @Test
    @Tag("smoke")
    void hasTheRightTitle(Page page) {
        page.navigate("https://the-internet.herokuapp.com");
        assertThat(page).hasTitle("The Internet");
    }

    // This test is not finished yet, so it fails. Since it's tagged as wip, it doesn't run with the smoke group.
    @Test
    @Tag("wip")
    void workInProgress(Page page) {
        page.navigate("https://the-internet.herokuapp.com");
        assertThat(page).hasTitle("Not finished yet");
    }
}
