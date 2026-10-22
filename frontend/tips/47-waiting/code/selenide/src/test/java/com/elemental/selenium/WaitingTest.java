package com.elemental.selenium;

import com.codeborne.selenide.ex.ElementNotFound;
import com.codeborne.selenide.ex.ElementShould;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.time.Duration;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class WaitingTest {
  private static final String BASE_URL = "https://the-internet.herokuapp.com/dynamic_loading";

  @Test
  public void defaultTimeoutGivesUpBeforeTheElementIsRendered() {
    open(BASE_URL + "/2");
    $("#start button").click();
    assertThrows(ElementNotFound.class, () -> $("#finish").shouldBe(visible));
  }

  @Test
  public void defaultTimeoutGivesUpWhileTheElementIsHidden() {
    open(BASE_URL + "/1");
    $("#start button").click();
    assertThrows(ElementShould.class, () -> $("#finish").shouldBe(visible));
  }

  @ParameterizedTest
  @ValueSource(strings = {"1", "2"})
  public void longerTimeout(String example) {
    open(BASE_URL + "/" + example);
    $("#start button").click();
    $("#finish").shouldBe(visible, Duration.ofSeconds(10)).shouldHave(exactText("Hello World!"));
  }
}
