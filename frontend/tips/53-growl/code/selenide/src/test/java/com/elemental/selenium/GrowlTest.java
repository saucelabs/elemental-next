package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.Wait;
import static com.codeborne.selenide.Selenide.executeJavaScript;
import static com.codeborne.selenide.Selenide.open;

public class GrowlTest {
  @Test
  public void growlNotification() {
    open("https://the-internet.herokuapp.com");

    // Step 1: check for jQuery on the page, add it if need be
    executeJavaScript("""
      if (!window.jQuery) {
        var jquery = document.createElement('script');
        jquery.type = 'text/javascript';
        jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(jquery);
      }""");
    Wait().until(driver -> executeJavaScript("return !!window.jQuery"));

    // Step 2: use jQuery to add jquery-growl to the page
    executeJavaScript("$.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

    // Step 3: use jQuery to add jquery-growl styles to the page
    executeJavaScript("$('head').append('<link rel=\"stylesheet\" "
      + "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');");
    Wait().until(driver -> executeJavaScript("return !!$.growl"));

    // Step 4: display a message with jquery-growl
    executeJavaScript("$.growl({ title: 'GET', message: '/' });");

    $("#growls .growl").shouldBe(visible);
    $("#growls .growl .growl-title").shouldHave(exactText("GET"));
    $("#growls .growl .growl-message").shouldHave(exactText("/"));
  }
}
