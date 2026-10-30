package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class CheckboxesTest {

    @BeforeEach
    void visitCheckboxesPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/checkboxes");
    }

    @Test
    void lookUpCheckedAttribute(Page page) {
        Locator checkboxes = page.locator("input[type=\"checkbox\"]");
        Object checkedValues = checkboxes.evaluateAll(
                "elements => elements.map(element => element.getAttribute('checked'))");
        System.out.println(checkedValues);
        assertNull(checkboxes.first().getAttribute("checked"));
        assertNotNull(checkboxes.last().getAttribute("checked"));
    }

    @Test
    void checkboxIsChecked(Page page) {
        Locator checkboxes = page.locator("input[type=\"checkbox\"]");
        assertThat(checkboxes.first()).not().isChecked();
        assertThat(checkboxes.last()).isChecked();
    }
}
