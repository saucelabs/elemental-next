package com.elemental.selenium;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class DataDrivenTest {
  @ParameterizedTest(name = "{0}")
  @CsvFileSource(resources = "/user_data.csv", numLinesToSkip = 1)
  public void login(String accountType, String username, String password, String notificationMessage) {
    open("https://the-internet.herokuapp.com/login");
    $("#username").setValue(username);
    $("#password").setValue(password);
    $("#login button").click();
    $("#flash").shouldHave(text(notificationMessage));
  }
}
