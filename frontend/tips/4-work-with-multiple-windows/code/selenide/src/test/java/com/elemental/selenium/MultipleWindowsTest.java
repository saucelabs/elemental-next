package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.switchTo;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.numberOfWindows;
import static com.codeborne.selenide.WebDriverConditions.title;
import static com.codeborne.selenide.WebDriverConditions.url;

public class MultipleWindowsTest {
    @BeforeEach
    final void openAUT() {
        open("https://the-internet.herokuapp.com/windows");
    }
    
    @Test
    public void multipleWindows() {
        webdriver().shouldHave(numberOfWindows(1));
        $(".example a").shouldHave(text("Click Here")).click();

        webdriver().shouldHave(numberOfWindows(2));
        webdriver().shouldHave(title("The Internet"));
        webdriver().shouldHave(url("https://the-internet.herokuapp.com/windows"));

        switchTo().window(1);
        // Waiting for the new window to have a title, then we consider it is loaded
        webdriver().shouldHave(title("New Window"));
        webdriver().shouldHave(url("https://the-internet.herokuapp.com/windows/new"));
    }
}