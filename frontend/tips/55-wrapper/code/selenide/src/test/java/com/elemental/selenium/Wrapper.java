package com.elemental.selenium;

import com.codeborne.selenide.logevents.LogEvent;
import com.codeborne.selenide.logevents.LogEventListener;

import java.util.ArrayList;
import java.util.List;

public class Wrapper implements LogEventListener {
  private final List<String> messages = new ArrayList<>();

  public List<String> getMessages() {
    return messages;
  }

  private void log(String message) {
    System.out.println(message);
    messages.add(message);
  }

  @Override
  public void beforeEvent(LogEvent event) {
    log("Before " + event.getElement() + " " + event.getSubject());
  }

  @Override
  public void afterEvent(LogEvent event) {
    log("After " + event.getElement() + " " + event.getSubject() + ": " + event.getStatus());
  }
}
