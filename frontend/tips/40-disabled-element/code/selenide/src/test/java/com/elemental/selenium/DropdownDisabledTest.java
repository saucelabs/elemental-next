package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.disabled;
import static com.codeborne.selenide.Condition.enabled;
import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.open;

public class DropdownDisabledTest {
  @Test
  public void disabledOption() {
    open("https://the-internet.herokuapp.com/dropdown");
    $$("option").findBy(exactText("Please select an option")).shouldBe(disabled);
    $$("option").findBy(exactText("Option 1")).shouldBe(enabled);
  }
}
