package com.elemental.appium;

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
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MobileWebTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    private static final String BASE_URL = "https://the-internet.herokuapp.com";

    AppiumDriver driver;
    WebDriverWait wait;

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
    public void logsIn(String platform) throws Exception {
        openBrowser(platform, "Logs in");
        driver.get(BASE_URL);
        // Safari doesn't always wait for the page to load, so the test waits for the elements it needs
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a[href='/login']"))).click();

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#username"))).sendKeys("tomsmith");
        driver.findElement(By.cssSelector("#password")).sendKeys("SuperSecretPassword!");
        // On Android, the on-screen keyboard can cover the login button
        if (driver instanceof AndroidDriver android) {
            android.hideKeyboard();
        }
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        WebElement flash = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#flash")));
        Assertions.assertTrue(flash.getText().contains("You logged into a secure area!"));
    }

    @ParameterizedTest
    @ValueSource(strings = {"Android", "iOS"})
    public void checksACheckbox(String platform) throws Exception {
        openBrowser(platform, "Checks a checkbox");
        driver.get(BASE_URL + "/checkboxes");

        WebElement checkbox = wait.until(
            ExpectedConditions.elementToBeClickable(By.cssSelector("#checkboxes input:first-of-type")));
        Assertions.assertFalse(checkbox.isSelected());
        checkbox.click();
        Assertions.assertTrue(checkbox.isSelected());
    }

    private void openBrowser(String platform, String testName) throws Exception {
        Map<String, Object> sauceOptions = Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "appium3-2026-11",
            "name", "Elemental Selenium - Tip 77 - Appium Java - " + platform + " - " + testName);
        URL sauceUrl = URI.create(SAUCE_URL).toURL();

        if (platform.equals("Android")) {
            UiAutomator2Options options = new UiAutomator2Options().setDeviceName("Google.*");
            options.setCapability("browserName", "Chrome");
            options.setCapability("sauce:options", sauceOptions);
            driver = new AndroidDriver(sauceUrl, options);
        } else {
            XCUITestOptions options = new XCUITestOptions().setDeviceName("iPhone.*");
            options.setCapability("browserName", "Safari");
            options.setCapability("sauce:options", sauceOptions);
            driver = new IOSDriver(sauceUrl, options);
        }
        wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    }
}
