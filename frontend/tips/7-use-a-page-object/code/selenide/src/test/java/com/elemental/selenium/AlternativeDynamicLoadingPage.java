package com.elemental.selenium;

import com.codeborne.selenide.SelenideElement;

import java.time.Duration;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

public class AlternativeDynamicLoadingPage {
  private final SelenideElement startButton= $("#start button");
  private final SelenideElement finishButton= $("#finish");

  public void start() {
    startButton.click();
  }
  
  public void waitForCompletion(String expectedText) {
    finishButton.shouldBe(visible, Duration.ofSeconds(10));
    finishButton.shouldHave(text(expectedText));
  }
}
