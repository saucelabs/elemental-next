package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;

public class BasePage {

    private static final String BASE_URL = "https://the-internet.herokuapp.com";

    protected final Page page;

    public BasePage(Page page) {
        this.page = page;
    }

    public void visit(String path) {
        page.navigate(BASE_URL + path);
        assertThat(page).hasTitle("The Internet");
    }
}
