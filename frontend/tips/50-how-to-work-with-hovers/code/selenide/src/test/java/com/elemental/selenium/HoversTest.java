package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.hidden;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class HoversTest {
  @Test
  public void hover() {
    open("https://the-internet.herokuapp.com/hovers");
    $(".figure .figcaption").shouldBe(hidden);

    $(".figure").hover();
    $(".figure .figcaption").shouldBe(visible);
  }
}
