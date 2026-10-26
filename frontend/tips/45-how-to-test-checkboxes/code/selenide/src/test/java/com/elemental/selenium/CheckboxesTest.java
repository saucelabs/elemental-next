package com.elemental.selenium;

import com.codeborne.selenide.ElementsCollection;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.attribute;
import static com.codeborne.selenide.Condition.checked;
import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.open;

public class CheckboxesTest {
  private final ElementsCollection checkboxes = $$("input[type=checkbox]");

  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/checkboxes");
  }

  @Test
  public void attributeLookup() {
    checkboxes.first().shouldNotHave(attribute("checked"));
    checkboxes.last().shouldHave(attribute("checked"));
  }

  @Test
  public void isChecked() {
    checkboxes.first().shouldNotBe(checked);
    checkboxes.last().shouldBe(checked);
  }
}
