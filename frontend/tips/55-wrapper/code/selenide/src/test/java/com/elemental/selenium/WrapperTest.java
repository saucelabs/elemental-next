package com.elemental.selenium;

import com.codeborne.selenide.logevents.SelenideLogger;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.codeborne.selenide.Selectors.byLinkText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.url;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class WrapperTest {
  Wrapper listener;

  @BeforeEach
  void setUp() {
    listener = new Wrapper();
    SelenideLogger.addListener("wrapper", listener);
  }

  @AfterEach
  void tearDown() {
    SelenideLogger.removeListener("wrapper");
  }

  @Test
  public void listenerLogsEveryAction() {
    open("https://the-internet.herokuapp.com");
    $(byLinkText("Checkboxes")).click();
    webdriver().shouldHave(url("https://the-internet.herokuapp.com/checkboxes"));

    assertEquals(List.of(
      "Before open https://the-internet.herokuapp.com",
      "Before webdriver create()",
      "After webdriver create(): PASS",
      "After open https://the-internet.herokuapp.com: PASS",
      "Before By.linkText: Checkboxes click()",
      "After By.linkText: Checkboxes click(): PASS",
      "Before webdriver should have url https://the-internet.herokuapp.com/checkboxes",
      "After webdriver should have url https://the-internet.herokuapp.com/checkboxes: PASS"), listener.getMessages());
  }
}
