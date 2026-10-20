package com.elemental.vibium;

import com.vibium.Page;
import com.vibium.types.FindOptions;
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
        page.find(selector).click();
    }

    public void type(String selector, String text) {
        page.find(selector).fill(text);
    }

    public String textOf(String selector) {
        return page.find(selector).text();
    }

    public boolean isDisplayed(String selector) {
        return page.find(selector).isVisible();
    }

    public void waitFor(String selector) {
        page.find(selector).waitUntil("visible", new FindOptions().timeout(10000));
    }
}
