package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.Test;

@UsePlaywright
class DragAndDropTest {

    @Test
    void swapColumns(Page page) {
        page.navigate("https://the-internet.herokuapp.com/drag_and_drop");

        page.locator("#column-a").dragTo(page.locator("#column-b"));

        assertThat(page.locator("#column-a")).hasText("B");
        assertThat(page.locator("#column-b")).hasText("A");
    }
}
