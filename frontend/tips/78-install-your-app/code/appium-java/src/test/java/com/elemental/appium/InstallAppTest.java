package com.elemental.appium;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.time.Duration;
import java.util.Base64;
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

public class InstallAppTest {
    private static final String SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    private static final String STORAGE_URL = "https://api.us-west-1.saucelabs.com/v1/storage/upload";
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
            .setApp(uploadApp(ANDROID_APP));
        options.setCapability("sauce:options", sauceOptions("Android"));
        driver = new AndroidDriver(URI.create(SAUCE_URL).toURL(), options);

        assertBackpackIsShown(AppiumBy.androidUIAutomator("new UiSelector().text(\"Sauce Labs Backpack\")"));
    }

    @Test
    public void ios() throws Exception {
        XCUITestOptions options = new XCUITestOptions()
            .setDeviceName("iPhone.*")
            .setApp(uploadApp(IOS_APP));
        options.setCapability("sauce:options", sauceOptions("iOS"));
        driver = new IOSDriver(URI.create(SAUCE_URL).toURL(), options);

        assertBackpackIsShown(AppiumBy.iOSNsPredicateString("label == 'Sauce Labs Backpack - Black'"));
    }

    private String uploadApp(String url) throws Exception {
        HttpClient client = HttpClient.newBuilder().followRedirects(HttpClient.Redirect.NORMAL).build();
        byte[] app = client.send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofByteArray()).body();
        String fileName = url.substring(url.lastIndexOf('/') + 1);

        String boundary = "elemental-selenium";
        String credentials = System.getenv("SAUCE_USERNAME") + ":" + System.getenv("SAUCE_ACCESS_KEY");
        HttpRequest upload = HttpRequest.newBuilder(URI.create(STORAGE_URL))
            .header("Authorization", "Basic " + Base64.getEncoder().encodeToString(credentials.getBytes()))
            .header("Content-Type", "multipart/form-data; boundary=" + boundary)
            .POST(BodyPublishers.concat(
                BodyPublishers.ofString("--" + boundary + "\r\n"
                    + "Content-Disposition: form-data; name=\"payload\"; filename=\"" + fileName + "\"\r\n\r\n"),
                BodyPublishers.ofByteArray(app),
                BodyPublishers.ofString("\r\n--" + boundary + "--\r\n")))
            .build();
        int status = client.send(upload, BodyHandlers.discarding()).statusCode();
        Assertions.assertEquals(201, status, "Uploading " + fileName);

        return "storage:filename=" + fileName;
    }

    private Map<String, Object> sauceOptions(String platform) {
        return Map.of(
            "username", System.getenv("SAUCE_USERNAME"),
            "accessKey", System.getenv("SAUCE_ACCESS_KEY"),
            "appiumVersion", "latest",
            "name", "Elemental Selenium - Tip 78 - Appium Java - " + platform);
    }

    private void assertBackpackIsShown(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        WebElement backpack = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        Assertions.assertTrue(backpack.isDisplayed());
    }
}
