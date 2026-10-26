package com.elemental.selenium;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static com.codeborne.selenide.Selenide.executeJavaScript;
import static com.codeborne.selenide.Selenide.open;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class StatusCodesTest {
  private static final String STATUS_CODE_SCRIPT =
    "return performance.getEntriesByType('navigation')[0].responseStatus";

  @ParameterizedTest
  @ValueSource(ints = {200, 301, 404, 500})
  public void statusCode(int expected) {
    open("https://the-internet.herokuapp.com/status_codes/" + expected);
    long statusCode = executeJavaScript(STATUS_CODE_SCRIPT);
    assertEquals(expected, statusCode);
  }
}
