package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class DynamicLoadingPage {

    private final Page page;
    public final Locator startButton;
    public final Locator finishText;

    public DynamicLoadingPage(Page page) {
        this.page = page;
        startButton = page.locator("#start button");
        finishText = page.locator("#finish");
    }

    public void visit() {
        page.navigate("https://the-internet.herokuapp.com/dynamic_loading/2");
        assertThat(page).hasTitle("The Internet");
    }

    public void start() {
        startButton.click();
    }
}
