package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.DragAndDropOptions.to;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class DragAndDropTest {
  @Test
  public void dragAndDrop() {
    open("https://the-internet.herokuapp.com/drag_and_drop");
    $("#column-a").dragAndDrop(to("#column-b"));
    $("#column-a").shouldHave(exactText("B"));
    $("#column-b").shouldHave(exactText("A"));
  }
}
