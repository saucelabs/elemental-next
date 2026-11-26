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
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LocatorsTest {
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

    @Test
    public void android() throws Exception {
        UiAutomator2Options options = new UiAutomator2Options()
            .setDeviceName("Google Pixel [0-9]+( Pro)?")
            .setApp(ANDROID_APP);
        options.setCapability("sauce:options", sauceOptions("Android"));
        driver = new AndroidDriver(URI.create(SAUCE_URL).toURL(), options);

        find("Product Image").click();
        find("Tap to add product to cart").click();
        find("View cart").click();
        Assertions.assertTrue(find("Confirms products for checkout").isDisplayed());
    }

    @Test
    public void ios() throws Exception {
        XCUITestOptions options = new XCUITestOptions()
            .setDeviceName("iPhone 1[4-7].*")
            .setApp(IOS_APP);
        options.setCapability("sauce:options", sauceOptions("iOS"));
        driver = new IOSDriver(URI.create(SAUCE_URL).toURL(), options);

        find("ProductItem").click();
        find("AddToCart").click();
        find("Cart-tab-item").click();
        Assertions.assertTrue(find("ProceedToCheckout").isDisplayed());
    }

    private WebElement find(String accessibilityId) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(AppiumBy.accessibilityId(accessibilityId)));
    }

    private Map<String, Object> sauceOptions(String platform) {
        return Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 80 - Appium Java - " + platform);
    }
}
