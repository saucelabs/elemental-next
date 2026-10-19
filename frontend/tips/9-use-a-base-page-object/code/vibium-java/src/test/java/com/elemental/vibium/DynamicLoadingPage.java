package com.elemental.vibium;

import com.vibium.Page;

public class DynamicLoadingPage extends BasePage {
    private static final String START_BUTTON = "#start button";
    private static final String FINISH_TEXT = "#finish";

    public DynamicLoadingPage(Page page) {
        super(page);
    }

    public void load() {
        visit("/dynamic_loading/2");
    }

    public void start() {
        click(START_BUTTON);
    }

    public String finishText() {
        waitFor(FINISH_TEXT);
        return textOf(FINISH_TEXT);
    }
}
