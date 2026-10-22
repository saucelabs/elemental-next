package com.elemental.selenium;

import com.codeborne.selenide.SelenideElement;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Objects;

import static com.codeborne.selenide.Condition.attributeMatching;
import static com.codeborne.selenide.HighlightOptions.border;
import static com.codeborne.selenide.Selectors.byId;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.executeJavaScript;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.sleep;

public class HighlightTest {
  private static final String HIGHLIGHT_STYLE = "border: 2px solid red; border-style: dashed;";

  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/large");
  }

  private void highlight(SelenideElement element, int durationInSeconds) {
    // store the original style so it can be reset later
    String originalStyle = Objects.requireNonNullElse(element.attr("style"), "");
    // style the element with a red dashed border
    executeJavaScript("arguments[0].setAttribute('style', arguments[1])", element, HIGHLIGHT_STYLE);
    // keep the element highlighted for a spell and then revert
    if (durationInSeconds > 0) {
      sleep(durationInSeconds * 1000L);
      executeJavaScript("arguments[0].setAttribute('style', arguments[1])", element, originalStyle);
    }
  }

  @Test
  public void highlightElement() {
    SelenideElement element = $(byId("sibling-2.3"));
    highlight(element, 0);
    element.shouldHave(attributeMatching("style", ".*dashed.*"));
  }

  @Test
  public void highlightRevertsTheStyle() {
    SelenideElement element = $(byId("sibling-2.3"));
    highlight(element, 1);
    element.shouldNotHave(attributeMatching("style", ".*dashed.*"));
  }

  @Test
  public void highlightWithSelenide() {
    SelenideElement element = $(byId("sibling-2.3"));
    element.highlight(border("2px dashed red"));
    element.shouldHave(attributeMatching("style", ".*dashed.*"));
  }
}
