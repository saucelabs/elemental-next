package com.elemental.selenium;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.Map;

import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.title;

public class CloudTest {
  private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

  @BeforeEach
  void setUp() {
    String username = System.getenv("SAUCE_USERNAME");
    String accessKey = System.getenv("SAUCE_ACCESS_KEY");
    Assumptions.assumeTrue(username != null && accessKey != null,
      "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");

    ChromeOptions options = new ChromeOptions();
    options.setBrowserVersion("latest");
    options.setPlatformName("Windows 11");
    options.setCapability("sauce:options", Map.of(
      "username", username,
      "accessKey", accessKey,
      "name", "Elemental Selenium - Tip 26 - Selenide"));
    Configuration.remote = SAUCE_URL;
    Configuration.browserCapabilities = options;
  }

  @AfterEach
  void tearDown() {
    closeWebDriver();
  }

  @Test
  public void pageTitle() {
    open("https://the-internet.herokuapp.com");
    webdriver().shouldHave(title("The Internet"));
  }
}
