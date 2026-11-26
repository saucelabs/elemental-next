package com.elemental.appium;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import java.net.URL;
import java.net.URI;
import java.time.Duration;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ParallelTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    private static final String ANDROID_APP =
        "https://github.com/saucelabs/my-demo-app-android/releases/download/2.3.0/mda-2.3.0-27.apk";
    private static final String IOS_APP =
        "https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa";

    AppiumDriver driver;

    @BeforeEach
    public void beforeEach() {
        Assumptions.assumeTrue(System.getenv("SAUCE_USERNAME") != null && System.getenv("SAUCE_ACCESS_KEY") != null,
            "Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @ParameterizedTest
    @ValueSource(strings = {"Android", "iOS"})
    public void showsTheBackpackInTheCatalog(String platform) throws Exception {
        startDriver(platform);

        By backpack = platform.equals("Android")
            ? AppiumBy.androidUIAutomator("new UiSelector().text(\"Sauce Labs Backpack\")")
            : AppiumBy.iOSNsPredicateString("label == 'Sauce Labs Backpack - Black'");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        Assertions.assertTrue(wait.until(ExpectedConditions.visibilityOfElementLocated(backpack)).isDisplayed());
    }

    private void startDriver(String platform) throws Exception {
        Map<String, Object> sauceOptions = Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 79 - Appium Java - " + platform);
        URL sauceUrl = URI.create(SAUCE_URL).toURL();

        if (platform.equals("Android")) {
            UiAutomator2Options options = new UiAutomator2Options().setDeviceName("Google.*").setApp(ANDROID_APP);
            options.setCapability("sauce:options", sauceOptions);
            driver = new AndroidDriver(sauceUrl, options);
        } else {
            XCUITestOptions options = new XCUITestOptions().setDeviceName("iPhone.*").setApp(IOS_APP);
            options.setCapability("sauce:options", sauceOptions);
            driver = new IOSDriver(sauceUrl, options);
        }
    }
}
