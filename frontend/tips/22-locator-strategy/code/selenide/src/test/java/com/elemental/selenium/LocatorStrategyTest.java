package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.attributeMatching;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class LocatorStrategyTest {
  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/download");
  }

  @Test
  public void firstLinkOnThePage() {
    $("a").shouldHave(attributeMatching("href", ".*github.com.*"));
  }

  @Test
  public void firstLinkInTheContent() {
    $("#content a").shouldHave(attributeMatching("href", ".*/download/.*"));
  }

  @Test
  public void firstLinkInTheExample() {
    $("#content .example a").shouldHave(attributeMatching("href", ".*/download/.*"));
  }
}
