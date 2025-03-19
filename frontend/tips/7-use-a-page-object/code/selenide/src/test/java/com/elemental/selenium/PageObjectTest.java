package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.open;

public class PageObjectTest {
    @Test
    void pageObject() {
        var page = open("https://the-internet.herokuapp.com/dynamic_loading/2", DynamicLoadingPage.class);
        page.start();
        page.waitForCompletion("Hello World!");
    }    

    @Test
    void alternativePageObject() {
        var page = open("https://the-internet.herokuapp.com/dynamic_loading/2", AlternativeDynamicLoadingPage.class);
        page.start();
        page.waitForCompletion("Hello World!");
    }

    @Test
    void anotherPageObject() {
        var page = open("https://the-internet.herokuapp.com/dynamic_loading/2", AnotherDynamicLoadingPage.class);
        page.start();
        page.waitForCompletion("Hello World!");
    }
}