package com.elemental.vibium;

import com.vibium.Page;
import com.vibium.types.FindOptions;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.Assertions;

public class BasePage {
    private static final String BASE_URL = "https://the-internet.herokuapp.com";

    protected final Page page;

    public BasePage(Page page) {
        this.page = page;
    }

    public void visit(String path) {
        page.go(BASE_URL + path);
        Assertions.assertEquals("The Internet", page.title());
    }

    public void click(String selector) {
        page.find(new SelectorOptions().css(selector)).click();
    }

    public void type(String selector, String text) {
        page.find(new SelectorOptions().css(selector)).fill(text);
    }

    public String textOf(String selector) {
        return page.find(new SelectorOptions().css(selector)).text();
    }

    public boolean isDisplayed(String selector) {
        return page.find(new SelectorOptions().css(selector)).isVisible();
    }

    public void waitFor(String selector) {
        page.find(new SelectorOptions().css(selector)).waitUntil("visible", new FindOptions().timeout(10000));
    }
}
