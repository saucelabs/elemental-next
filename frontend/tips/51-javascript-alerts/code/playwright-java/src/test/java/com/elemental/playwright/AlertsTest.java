package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.options.AriaRole;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class AlertsTest {

    @BeforeEach
    void visitAlertsPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/javascript_alerts");
    }

    @Test
    void acceptConfirmation(Page page) {
        page.onDialog(dialog -> dialog.accept());
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Click for JS Confirm")).click();

        assertThat(page.locator("#result")).hasText("You clicked: Ok");
    }

    @Test
    void dismissConfirmation(Page page) {
        page.onDialog(dialog -> dialog.dismiss());
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Click for JS Confirm")).click();

        assertThat(page.locator("#result")).hasText("You clicked: Cancel");
    }
}
