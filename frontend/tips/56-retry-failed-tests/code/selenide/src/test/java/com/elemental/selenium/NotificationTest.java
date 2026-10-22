package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class NotificationTest {
  // The page shows the successful message only some of the time, so this test is flaky on purpose.
  // If it fails, Maven Surefire runs it again (see rerunFailingTestsCount in the pom.xml).
  @Test
  public void notificationMessage() {
    open("https://the-internet.herokuapp.com/notification_message");
    $("#flash").shouldHave(text("Action successful"));
  }
}
