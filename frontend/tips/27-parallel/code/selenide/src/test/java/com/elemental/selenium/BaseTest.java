package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;

import java.util.Comparator;

import static com.codeborne.selenide.Selenide.open;

public abstract class BaseTest {
  protected static final Comparator<String> BY_AMOUNT =
    Comparator.comparing(due -> Double.parseDouble(due.replace("$", "")));

  // Selenide keeps one browser per thread, so the tests that run at the same time don't share a browser.
  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/tables");
  }
}
