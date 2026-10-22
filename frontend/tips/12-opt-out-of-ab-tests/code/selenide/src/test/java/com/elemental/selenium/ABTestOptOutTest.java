package com.elemental.selenium;

import com.codeborne.selenide.junit5.BrowserPerTestStrategyExtension;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.openqa.selenium.Cookie;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Condition.oneOfExactTexts;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.refresh;
import static com.codeborne.selenide.Selenide.switchTo;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

@ExtendWith(BrowserPerTestStrategyExtension.class)
public class ABTestOptOutTest {
  @Test
  public void forgeCookieOnTargetPage() {
    open("https://the-internet.herokuapp.com/abtest");
    $("h3").shouldHave(oneOfExactTexts("A/B Test Variation 1", "A/B Test Control"));
    getWebDriver().manage().addCookie(new Cookie("optimizelyOptOut", "true"));
    refresh();
    $("h3").shouldHave(exactText("No A/B Test"));
  }

  @Test
  public void forgeCookieBeforeVisitingTargetPage() {
    open("https://the-internet.herokuapp.com");
    getWebDriver().manage().addCookie(new Cookie("optimizelyOptOut", "true"));
    open("https://the-internet.herokuapp.com/abtest");
    $("h3").shouldHave(exactText("No A/B Test"));
  }

  @Test
  public void urlParameter() {
    open("https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");
    switchTo().alert().dismiss();
    $("h3").shouldHave(exactText("No A/B Test"));
  }
}
