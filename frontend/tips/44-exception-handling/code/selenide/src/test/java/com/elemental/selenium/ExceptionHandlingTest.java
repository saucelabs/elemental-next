package com.elemental.selenium;

import com.codeborne.selenide.ex.ElementNotFound;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.exist;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ExceptionHandlingTest {
  @BeforeEach
  void logIn() {
    open("https://the-internet.herokuapp.com/login");
    $("#username").setValue("tomsmith");
    $("#password").setValue("SuperSecretPassword!");
    $("#login button").click();
    $(".flash.success").shouldBe(visible);
  }

  @Test
  public void lookingForAMissingElementThrowsAnException() {
    assertThrows(ElementNotFound.class, () -> $("#login").shouldBe(visible));
  }

  @Test
  public void loginFormIsNotDisplayed() {
    assertFalse($("#login").isDisplayed());
  }

  @Test
  public void loginFormShouldNotExist() {
    $("#login").shouldNot(exist);
  }
}
