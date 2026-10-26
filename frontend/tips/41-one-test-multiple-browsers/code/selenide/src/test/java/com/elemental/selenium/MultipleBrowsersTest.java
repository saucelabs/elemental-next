package com.elemental.selenium;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.MutableCapabilities;

import java.util.Map;

import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.title;

public class MultipleBrowsersTest {
  private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

  private void setUp(String browser) {
    String username = System.getenv("SAUCE_USERNAME");
    String accessKey = System.getenv("SAUCE_ACCESS_KEY");
    Assumptions.assumeTrue(username != null && accessKey != null,
      "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");

    MutableCapabilities capabilities = new MutableCapabilities();
    capabilities.setCapability("platformName", "Windows 11");
    capabilities.setCapability("sauce:options", Map.of(
      "username", username,
      "accessKey", accessKey,
      "name", "Elemental Selenium - Tip 41 - Selenide - " + browser));
    Configuration.remote = SAUCE_URL;
    Configuration.browser = browser;
    Configuration.browserVersion = "latest";
    Configuration.browserCapabilities = capabilities;
  }

  @AfterEach
  void tearDown() {
    closeWebDriver();
  }

  @ParameterizedTest
  @ValueSource(strings = {"chrome", "firefox", "edge"})
  public void pageTitle(String browser) {
    setUp(browser);
    open("https://the-internet.herokuapp.com");
    webdriver().shouldHave(title("The Internet"));
  }
}
