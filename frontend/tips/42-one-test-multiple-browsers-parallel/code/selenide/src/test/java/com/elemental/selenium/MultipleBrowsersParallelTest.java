package com.elemental.selenium;

import com.codeborne.selenide.SelenideConfig;
import com.codeborne.selenide.SelenideDriver;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.MutableCapabilities;

import java.util.Map;

import static com.codeborne.selenide.WebDriverConditions.title;

public class MultipleBrowsersParallelTest {
  private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

  SelenideDriver driver;

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
      "name", "Elemental Selenium - Tip 42 - Selenide - " + browser));
    // Each test has its own configuration, so tests running at the same time can use different browsers.
    driver = new SelenideDriver(new SelenideConfig()
      .remote(SAUCE_URL)
      .browser(browser)
      .browserVersion("latest")
      .browserCapabilities(capabilities));
  }

  @AfterEach
  void tearDown() {
    if (driver != null) {
      driver.close();
    }
  }

  @ParameterizedTest
  @ValueSource(strings = {"chrome", "firefox", "edge"})
  public void pageTitle(String browser) {
    setUp(browser);
    driver.open("https://the-internet.herokuapp.com");
    driver.webdriver().shouldHave(title("The Internet"));
  }
}
