package com.elemental.selenium;

import org.openqa.selenium.By;

import java.time.Duration;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

public class DynamicLoadingPage {
  private final By startButton = By.cssSelector("#start button");
  private final By finishButton = By.cssSelector("#finish");

  public void start() {
    $(startButton).click();
  }

  public void waitForCompletion(String expectedText) {
    $(finishButton).shouldBe(visible, Duration.ofSeconds(10));
    $(finishButton).shouldHave(text(expectedText));
  }
}
