package com.elemental.selenium;

import java.time.Duration;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

/**
 * Page objects don't necessarily have to contain fields. 
 * It's totally ok to only have methods. 
 * 
 * Remember, object exposes its behavior via METHODS, not fields!
 */
public class AnotherDynamicLoadingPage {

  public void start() {
    $("#start button").click();
  }
  
  public void waitForCompletion(String expectedText) {
    $("#finish")
      .shouldBe(visible, Duration.ofSeconds(10))
      .shouldHave(text(expectedText));
  }
}
