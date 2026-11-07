package com.elemental.selenium;

import java.time.Duration;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.bidi.Command;
import org.openqa.selenium.bidi.emulation.Emulation;
import org.openqa.selenium.bidi.emulation.GeolocationCoordinates;
import org.openqa.selenium.bidi.emulation.SetGeolocationOverrideParameters;
import org.openqa.selenium.bidi.emulation.SetTimezoneOverrideParameters;
import org.openqa.selenium.bidi.module.Permission;
import org.openqa.selenium.bidi.permissions.PermissionState;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class EmulateLocationTest {
    ChromeDriver driver;
    Emulation emulation;
    List<String> tab;

    @BeforeEach
    public void beforeEach() {
        ChromeOptions options = new ChromeOptions();
        // Turns on WebDriver BiDi, which lets the test change what the browser reports
        options.enableBiDi();
        driver = new ChromeDriver(options);
        emulation = new Emulation(driver);
        tab = List.of(driver.getWindowHandle());
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void geolocation() {
        new Permission(driver).setPermission(Map.of("name", "geolocation"), PermissionState.GRANTED,
                "https://the-internet.herokuapp.com");
        emulation.setGeolocationOverride(
                new SetGeolocationOverrideParameters(new GeolocationCoordinates(52.52, 13.405)).contexts(tab));

        driver.get("https://the-internet.herokuapp.com/geolocation");
        driver.findElement(By.tagName("button")).click();
        new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("lat-value")));
        Assertions.assertEquals("52.52", driver.findElement(By.id("lat-value")).getText());
        Assertions.assertEquals("13.405", driver.findElement(By.id("long-value")).getText());
    }

    @Test
    public void timeZoneAndLocale() {
        emulation.setTimezoneOverride(new SetTimezoneOverrideParameters("Asia/Tokyo").contexts(tab));
        // Selenium Java has no method for this BiDi command yet, so the test sends it
        driver.getBiDi().send(new Command<>("emulation.setLocaleOverride",
                Map.of("locale", "de-DE", "contexts", tab)));

        driver.get("https://the-internet.herokuapp.com/locale");
        Assertions.assertEquals("Asia/Tokyo", driver.findElement(By.id("browser-timezone")).getText());
        Assertions.assertEquals("de-DE", driver.findElement(By.id("browser-language")).getText());
        Assertions.assertEquals("Mittwoch, 15. April 2026 um 21:00",
                driver.findElement(By.id("formatted-date")).getText());
        Assertions.assertEquals("1.234.567,891", driver.findElement(By.id("formatted-number")).getText());
        Assertions.assertEquals("Hallo!", driver.findElement(By.id("greeting")).getText());
    }
}
