package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.confirm;
import static com.codeborne.selenide.Selenide.open;

public class RightClickTest {
  @Test
  public void rightClick() {
    open("https://the-internet.herokuapp.com/context_menu");
    $("#hot-spot").contextClick();
    confirm("You selected a context menu");
  }
}
