package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.confirm;
import static com.codeborne.selenide.Selenide.dismiss;
import static com.codeborne.selenide.Selenide.open;

public class JavaScriptAlertsTest {
  @BeforeEach
  void openConfirmation() {
    open("https://the-internet.herokuapp.com/javascript_alerts");
    $$("button").get(1).click();
  }

  @Test
  public void acceptConfirmation() {
    confirm();
    $("#result").shouldHave(exactText("You clicked: Ok"));
  }

  @Test
  public void dismissConfirmation() {
    dismiss();
    $("#result").shouldHave(exactText("You clicked: Cancel"));
  }
}
