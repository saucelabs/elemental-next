package com.elemental.vibium;

import com.vibium.Page;
import com.vibium.types.FindOptions;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.Assertions;

public class DynamicLoadingPage {
    private static final String URL = "https://the-internet.herokuapp.com/dynamic_loading/2";
    private static final String START_BUTTON = "#start button";
    private static final String FINISH_TEXT = "#finish";

    private final Page page;

    public DynamicLoadingPage(Page page) {
        this.page = page;
    }

    public void visit() {
        page.go(URL);
        Assertions.assertEquals("The Internet", page.title());
    }

    public void start() {
        page.find(new SelectorOptions().css(START_BUTTON)).click();
    }

    public void waitForFinish() {
        page.find(new SelectorOptions().css(FINISH_TEXT)).waitUntil("visible", new FindOptions().timeout(10000));
    }

    public String finishText() {
        return page.find(new SelectorOptions().css(FINISH_TEXT)).text();
    }
}
