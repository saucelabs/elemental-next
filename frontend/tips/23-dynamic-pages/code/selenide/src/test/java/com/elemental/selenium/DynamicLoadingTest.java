package com.elemental.selenium;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.time.Duration;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class DynamicLoadingTest {
  @ParameterizedTest
  @ValueSource(strings = {"1", "2"})
  public void dynamicLoading(String example) {
    open("https://the-internet.herokuapp.com/dynamic_loading/" + example);
    $("#start button").click();
    $("#finish").shouldBe(visible, Duration.ofSeconds(10));
  }
}
