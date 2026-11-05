package com.elemental.selenium;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.io.File;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import static com.codeborne.selenide.DownloadOptions.using;
import static com.codeborne.selenide.FileDownloadMode.FOLDER;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static java.time.Duration.ofSeconds;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class DownloadTest {
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
    Configuration.browser = "firefox";
    // Asks the Grid to keep the files the browser downloads, so we can fetch them
    Configuration.browserCapabilities = new FirefoxOptions().setEnableDownloads(true);
    Configuration.downloadsFolder = "target/downloads";
  }

  @AfterEach
  void tearDown() {
    closeWebDriver();
  }

  @Test
  public void downloadFile() {
    open("https://the-internet.herokuapp.com/download");
    String fileName = $(".example a").getText();

    // The browser saves the file in a folder on the Grid node, and Selenide copies it from there
    File downloadedFile = $(".example a").download(using(FOLDER).withTimeout(ofSeconds(10)));

    assertEquals(fileName, downloadedFile.getName());
    assertTrue(downloadedFile.length() > 0);
  }
}
