package com.elemental.selenium;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.title;

public class TaggingTest {
  @Test
  @Tag("smoke")
  public void pageTitle() {
    open("https://the-internet.herokuapp.com");
    webdriver().shouldHave(title("The Internet"));
  }

  // This test is not finished yet, so it fails. Since it's tagged as wip, it doesn't run with the smoke group.
  @Test
  @Tag("wip")
  public void workInProgress() {
    open("https://the-internet.herokuapp.com");
    webdriver().shouldHave(title("Not finished yet"));
  }
}
