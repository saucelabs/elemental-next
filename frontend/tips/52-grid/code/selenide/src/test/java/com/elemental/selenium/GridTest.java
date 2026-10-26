package com.elemental.selenium;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.title;

public class GridTest {
  private static final String GRID_URL =
    System.getenv().getOrDefault("GRID_URL", "http://localhost:4444");

  private static boolean gridIsRunning() {
    try {
      HttpRequest request = HttpRequest.newBuilder(URI.create(GRID_URL + "/status")).build();
      return HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.discarding()).statusCode() == 200;
    } catch (Exception e) {
      return false;
    }
  }

  @BeforeEach
  void setUp() {
    Assumptions.assumeTrue(gridIsRunning(),
      "Start a Selenium Grid on " + GRID_URL + " (or set GRID_URL) to run this test");
    Configuration.remote = GRID_URL;
  }

  @AfterEach
  void tearDown() {
    closeWebDriver();
  }

  @Test
  public void pageLoaded() {
    open("https://the-internet.herokuapp.com");
    webdriver().shouldHave(title("The Internet"));
  }
}
