package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Keys;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.actions;
import static com.codeborne.selenide.Selenide.open;

public class KeyPressesTest {
  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/key_presses");
  }

  @Test
  public void pressKeyOnAnElement() {
    $("#target").press(Keys.SPACE);
    $("#result").shouldHave(exactText("You entered: SPACE"));
  }

  @Test
  public void pressKeyWithoutAnElement() {
    actions().sendKeys(Keys.TAB).perform();
    $("#result").shouldHave(exactText("You entered: TAB"));
  }
}
