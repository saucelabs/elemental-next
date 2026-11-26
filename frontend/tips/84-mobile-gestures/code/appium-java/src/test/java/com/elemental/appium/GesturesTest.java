package com.elemental.appium;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import java.net.URI;
import java.time.Duration;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Rectangle;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.PointerInput;
import org.openqa.selenium.interactions.PointerInput.MouseButton;
import org.openqa.selenium.interactions.PointerInput.Origin;
import org.openqa.selenium.interactions.Sequence;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GesturesTest {
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
            .setDeviceName("Google.*")
            .setApp(ANDROID_APP)
            .setAutoGrantPermissions(true);
        options.setCapability("sauce:options", sauceOptions("Android"));
        driver = new AndroidDriver(URI.create(SAUCE_URL).toURL(), options);

        find(AppiumBy.accessibilityId("View menu")).click();
        find(AppiumBy.androidUIAutomator("new UiSelector().text(\"Drawing\")")).click();
        assertDrawsOn(find(AppiumBy.accessibilityId("Pad to draw on")));
    }

    @Test
    public void ios() throws Exception {
        XCUITestOptions options = new XCUITestOptions().setDeviceName("iPhone.*").setApp(IOS_APP);
        options.setCapability("sauce:options", sauceOptions("iOS"));
        driver = new IOSDriver(URI.create(SAUCE_URL).toURL(), options);

        find(AppiumBy.accessibilityId("More-tab-item")).click();
        find(AppiumBy.accessibilityId("Drawing-menu-item")).click();
        assertDrawsOn(find(AppiumBy.accessibilityId("DrawingBackground Icons")));
    }

    private void assertDrawsOn(WebElement pad) {
        byte[] before = pad.getScreenshotAs(OutputType.BYTES);
        drawLine(pad.getRect());
        byte[] after = pad.getScreenshotAs(OutputType.BYTES);
        Assertions.assertFalse(Arrays.equals(before, after));
    }

    private void drawLine(Rectangle pad) {
        int y = pad.y + pad.height / 2;
        int start = pad.x + pad.width / 4;
        int end = pad.x + pad.width * 3 / 4;
        PointerInput finger = new PointerInput(PointerInput.Kind.TOUCH, "finger");
        Sequence line = new Sequence(finger, 0)
            .addAction(finger.createPointerMove(Duration.ZERO, Origin.viewport(), start, y))
            .addAction(finger.createPointerDown(MouseButton.LEFT.asArg()))
            .addAction(finger.createPointerMove(Duration.ofMillis(500), Origin.viewport(), end, y))
            .addAction(finger.createPointerUp(MouseButton.LEFT.asArg()));
        driver.perform(List.of(line));
    }

    private WebElement find(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
    }

    private Map<String, Object> sauceOptions(String platform) {
        return Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 84 - Appium Java - " + platform);
    }
}
