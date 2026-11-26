package com.elemental.appium;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import java.net.URI;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.PointerInput;
import org.openqa.selenium.interactions.PointerInput.MouseButton;
import org.openqa.selenium.interactions.PointerInput.Origin;
import org.openqa.selenium.interactions.Sequence;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ScrollTest {
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
        UiAutomator2Options options = new UiAutomator2Options().setDeviceName("Google.*").setApp(ANDROID_APP);
        options.setCapability("sauce:options", sauceOptions("Android"));
        driver = new AndroidDriver(URI.create(SAUCE_URL).toURL(), options);

        waitForCatalog(AppiumBy.accessibilityId("Product Image"));
        By onesie = AppiumBy.androidUIAutomator("new UiSelector().text(\"Sauce Labs Onesie\")");
        Assertions.assertTrue(swipeUpUntilDisplayed(onesie));
    }

    @Test
    public void ios() throws Exception {
        XCUITestOptions options = new XCUITestOptions().setDeviceName("iPhone.*").setApp(IOS_APP);
        options.setCapability("sauce:options", sauceOptions("iOS"));
        driver = new IOSDriver(URI.create(SAUCE_URL).toURL(), options);

        waitForCatalog(AppiumBy.accessibilityId("ProductItem"));
        By onesie = AppiumBy.iOSNsPredicateString("label == 'Sauce Labs Onesie'");
        Assertions.assertTrue(swipeUpUntilDisplayed(onesie));
    }

    private void waitForCatalog(By product) {
        new WebDriverWait(driver, Duration.ofSeconds(30)).until(ExpectedConditions.visibilityOfElementLocated(product));
    }

    private boolean swipeUpUntilDisplayed(By locator) {
        for (int swipes = 0; swipes < 20; swipes++) {
            if (driver.findElements(locator).stream().anyMatch(WebElement::isDisplayed)) {
                return true;
            }
            swipeUp();
        }
        return false;
    }

    private void swipeUp() {
        Dimension size = driver.manage().window().getSize();
        int x = size.width / 2;
        PointerInput finger = new PointerInput(PointerInput.Kind.TOUCH, "finger");
        Sequence swipe = new Sequence(finger, 0)
            .addAction(finger.createPointerMove(Duration.ZERO, Origin.viewport(), x, size.height * 7 / 10))
            .addAction(finger.createPointerDown(MouseButton.LEFT.asArg()))
            .addAction(finger.createPointerMove(Duration.ofMillis(500), Origin.viewport(), x, size.height * 3 / 10))
            .addAction(finger.createPointerUp(MouseButton.LEFT.asArg()));
        driver.perform(List.of(swipe));
    }

    private Map<String, Object> sauceOptions(String platform) {
        return Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 82 - Appium Java - " + platform);
    }
}
