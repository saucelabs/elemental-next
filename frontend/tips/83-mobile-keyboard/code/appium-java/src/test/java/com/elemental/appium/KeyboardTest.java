package com.elemental.appium;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import java.net.URI;
import java.time.Duration;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class KeyboardTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    private static final String ANDROID_APP =
        "https://github.com/saucelabs/my-demo-app-android/releases/download/2.3.0/mda-2.3.0-27.apk";
    private static final String IOS_APP =
        "https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa";
    private static final String URL = "https://saucelabs.com";

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

    @Test
    public void android() throws Exception {
        UiAutomator2Options options = new UiAutomator2Options().setDeviceName("Google.*").setApp(ANDROID_APP);
        options.setCapability("sauce:options", sauceOptions("Android"));
        AndroidDriver android = new AndroidDriver(URI.create(SAUCE_URL).toURL(), options);
        driver = android;

        find(AppiumBy.accessibilityId("View menu")).click();
        find(AppiumBy.androidUIAutomator("new UiSelector().text(\"WebView\")")).click();

        WebElement url = find(AppiumBy.id("urlET"));
        url.sendKeys(URL);
        Assertions.assertEquals(URL, url.getText());
        if (android.isKeyboardShown()) {
            android.hideKeyboard();
        }

        find(AppiumBy.accessibilityId("Tap to view content of given url")).click();
        Assertions.assertTrue(find(AppiumBy.className("android.webkit.WebView")).isDisplayed());
    }

    @Test
    public void ios() throws Exception {
        XCUITestOptions options = new XCUITestOptions().setDeviceName("iPhone.*").setApp(IOS_APP);
        options.setCapability("sauce:options", sauceOptions("iOS"));
        driver = new IOSDriver(URI.create(SAUCE_URL).toURL(), options);

        find(AppiumBy.accessibilityId("More-tab-item")).click();
        find(AppiumBy.accessibilityId("Webview-menu-item")).click();

        WebElement url = find(AppiumBy.className("XCUIElementTypeTextField"));
        url.sendKeys(URL);
        Assertions.assertEquals(URL, url.getText());

        find(AppiumBy.accessibilityId("Go To Site")).click();
        Assertions.assertTrue(find(AppiumBy.className("XCUIElementTypeWebView")).isDisplayed());
    }

    private WebElement find(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    private Map<String, Object> sauceOptions(String platform) {
        return Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 83 - Appium Java - " + platform);
    }
}
