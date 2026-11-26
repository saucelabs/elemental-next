package com.elemental.appium;

import io.appium.java_client.AppiumBy;
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
import org.openqa.selenium.ScreenOrientation;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RotateTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    private static final String IOS_APP =
        "https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa";

    IOSDriver driver;

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
    public void showsTheCatalogInLandscape() throws Exception {
        XCUITestOptions options = new XCUITestOptions().setDeviceName("iPhone.*").setApp(IOS_APP);
        options.setCapability("sauce:options", Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 86 - Appium Java - iOS"));
        driver = new IOSDriver(URI.create(SAUCE_URL).toURL(), options);

        By product = AppiumBy.accessibilityId("ProductItem");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        wait.until(ExpectedConditions.visibilityOfElementLocated(product));
        Assertions.assertEquals(ScreenOrientation.PORTRAIT, driver.getOrientation());

        driver.rotate(ScreenOrientation.LANDSCAPE);
        Assertions.assertEquals(ScreenOrientation.LANDSCAPE, driver.getOrientation());
        Assertions.assertTrue(wait.until(ExpectedConditions.visibilityOfElementLocated(product)).isDisplayed());

        driver.rotate(ScreenOrientation.PORTRAIT);
        Assertions.assertEquals(ScreenOrientation.PORTRAIT, driver.getOrientation());
    }
}
