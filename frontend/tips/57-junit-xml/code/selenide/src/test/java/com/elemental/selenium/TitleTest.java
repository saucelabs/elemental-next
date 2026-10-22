package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.title;

public class TitleTest {
  @Test
  public void pageTitle() {
    open("https://the-internet.herokuapp.com");
    webdriver().shouldHave(title("The Internet"));
  }
}
