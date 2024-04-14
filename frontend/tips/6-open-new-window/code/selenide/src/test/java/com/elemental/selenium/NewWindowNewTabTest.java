package com.elemental.selenium;

import com.codeborne.selenide.junit5.BrowserPerTestStrategyExtension;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.switchTo;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.numberOfWindows;
import static com.codeborne.selenide.WebDriverConditions.title;
import static com.codeborne.selenide.WebDriverConditions.urlContaining;
import static org.openqa.selenium.WindowType.TAB;
import static org.openqa.selenium.WindowType.WINDOW;

@ExtendWith(BrowserPerTestStrategyExtension.class)
public class NewWindowNewTabTest {
  @Test
  public void newWindow() {
    open("https://the-internet.herokuapp.com/windows");

    switchTo().newWindow(WINDOW);
    open("https://the-internet.herokuapp.com/typos");
    webdriver().shouldHave(numberOfWindows(2));
  }

  @Test
  public void newTab() {
    open("https://the-internet.herokuapp.com/windows");
    webdriver().shouldHave(urlContaining("/windows"));
    webdriver().shouldHave(title("The Internet"));

    switchTo().newWindow(TAB);
    open("https://the-internet.herokuapp.com/typos");
    webdriver().shouldHave(numberOfWindows(2));
    webdriver().shouldHave(urlContaining("/typos"));
    webdriver().shouldHave(title("The Internet"));
  }
}