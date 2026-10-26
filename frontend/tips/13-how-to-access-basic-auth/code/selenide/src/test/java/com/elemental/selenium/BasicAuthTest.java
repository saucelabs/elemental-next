package com.elemental.selenium;

import com.codeborne.selenide.junit5.BrowserPerTestStrategyExtension;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

@ExtendWith(BrowserPerTestStrategyExtension.class)
public class BasicAuthTest {
  private static final String MESSAGE = "Congratulations! You must have the proper credentials.";

  @Test
  public void credentialsInUrl() {
    open("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    $(".example p").shouldHave(exactText(MESSAGE));
  }

  @Test
  public void credentialsCachedByTheBrowser() {
    open("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    open("https://the-internet.herokuapp.com/basic_auth");
    $(".example p").shouldHave(exactText(MESSAGE));
  }

  @Test
  public void credentialsGivenToSelenide() {
    open("https://the-internet.herokuapp.com/basic_auth", "", "admin", "admin");
    $(".example p").shouldHave(exactText(MESSAGE));
  }
}
