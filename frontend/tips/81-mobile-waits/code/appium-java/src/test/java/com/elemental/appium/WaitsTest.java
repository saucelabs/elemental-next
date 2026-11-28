package com.elemental.appium;

import static io.appium.java_client.AppiumBy.accessibilityId;
import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;
import static org.openqa.selenium.support.ui.ExpectedConditions.invisibilityOfElementLocated;
import static org.openqa.selenium.support.ui.ExpectedConditions.visibilityOfElementLocated;

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
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitsTest {
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
            .setDeviceName("Google Pixel ([89]|1[0-9])( Pro)?")
            .setApp(ANDROID_APP);
        options.setCapability("sauce:options", sauceOptions("Android"));
        driver = new AndroidDriver(URI.create(SAUCE_URL).toURL(), options);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));

        wait.until(visibilityOfElementLocated(accessibilityId("Product Image"))).click();
        wait.until(elementToBeClickable(accessibilityId("Tap to add product to cart"))).click();
        wait.until(elementToBeClickable(accessibilityId("View cart"))).click();

        By checkout = accessibilityId("Confirms products for checkout");
        wait.until(visibilityOfElementLocated(checkout));
        wait.until(elementToBeClickable(accessibilityId("Removes product from cart"))).click();
        Assertions.assertTrue(wait.until(invisibilityOfElementLocated(checkout)));
    }

    @Test
    public void ios() throws Exception {
        XCUITestOptions options = new XCUITestOptions()
            .setDeviceName("iPhone 1[4-7].*")
            .setApp(IOS_APP);
        options.setCapability("sauce:options", sauceOptions("iOS"));
        driver = new IOSDriver(URI.create(SAUCE_URL).toURL(), options);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));

        wait.until(visibilityOfElementLocated(accessibilityId("ProductItem"))).click();
        wait.until(elementToBeClickable(accessibilityId("AddToCart"))).click();
        wait.until(elementToBeClickable(accessibilityId("Cart-tab-item"))).click();

        By checkout = accessibilityId("ProceedToCheckout");
        wait.until(visibilityOfElementLocated(checkout));
        wait.until(elementToBeClickable(accessibilityId("Remove Item"))).click();
        Assertions.assertTrue(wait.until(invisibilityOfElementLocated(checkout)));
    }

    private Map<String, Object> sauceOptions(String platform) {
        return Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 81 - Appium Java - " + platform);
    }
}
