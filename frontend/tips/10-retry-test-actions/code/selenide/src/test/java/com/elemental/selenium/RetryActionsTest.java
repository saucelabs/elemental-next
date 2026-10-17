package com.elemental.selenium;

import com.codeborne.selenide.SelenideElement;
import org.junit.jupiter.api.Test;

import java.time.Duration;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static org.awaitility.Awaitility.await;

public class RetryActionsTest {
  @Test
  public void notificationMessage() {
    SelenideElement flash = $("#flash");
    await().atMost(Duration.ofSeconds(30)).pollInSameThread().until(() -> {
      open("https://the-internet.herokuapp.com/notification_message");
      return flash.has(text("Action successful"));
    });
  }
}
