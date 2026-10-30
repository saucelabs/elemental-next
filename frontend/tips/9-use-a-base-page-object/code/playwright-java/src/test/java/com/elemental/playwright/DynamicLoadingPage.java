package com.elemental.playwright;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class DynamicLoadingPage extends BasePage {

    public final Locator startButton;
    public final Locator finishText;

    public DynamicLoadingPage(Page page) {
        super(page);
        startButton = page.locator("#start button");
        finishText = page.locator("#finish");
    }

    public void load() {
        visit("/dynamic_loading/2");
    }

    public void start() {
        startButton.click();
    }
}
