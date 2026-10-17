package com.elemental.selenium;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.title;

public abstract class BasePage {
    private static final String BASE_URL = "https://the-internet.herokuapp.com";

    protected void visit(String path) {
        open(BASE_URL + path);
        webdriver().shouldHave(title("The Internet"));
    }
}
