package com.elemental.selenium;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.screenshot;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.title;
import static org.assertj.core.api.Assertions.assertThat;

public class HeadlessChromeTest {
  @BeforeEach
  void setUp() {
    Configuration.browser = "chrome"; // or "edge", "firefox" etc.
    Configuration.headless = true;
  }

  @Test
  public void runHeadlessly() {
    open("https://the-internet.herokuapp.com");

    webdriver().shouldHave(title("The Internet"));
    assertThat(screenshot("headless")).isNotNull();
  }
}
