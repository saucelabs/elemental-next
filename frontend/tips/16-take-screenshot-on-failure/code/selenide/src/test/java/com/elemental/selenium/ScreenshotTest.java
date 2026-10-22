package com.elemental.selenium;

import com.codeborne.selenide.junit5.ScreenShooterExtension;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.title;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(ScreenShooterExtension.class)
public class ScreenshotTest {
  @Test
  public void failsOnPurpose() {
    open("https://the-internet.herokuapp.com");
    $("h1").shouldHave(exactText("blah blah blah"));
  }

  @Test
  public void failsOnPurposeWithAnAssertion() {
    open("https://the-internet.herokuapp.com");
    assertEquals("blah blah blah", title());
  }
}
