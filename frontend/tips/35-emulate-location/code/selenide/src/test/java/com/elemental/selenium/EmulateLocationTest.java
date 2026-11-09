package com.elemental.selenium;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

import com.codeborne.selenide.Configuration;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.bidi.Command;
import org.openqa.selenium.bidi.HasBiDi;
import org.openqa.selenium.bidi.emulation.Emulation;
import org.openqa.selenium.bidi.emulation.GeolocationCoordinates;
import org.openqa.selenium.bidi.emulation.SetGeolocationOverrideParameters;
import org.openqa.selenium.bidi.emulation.SetTimezoneOverrideParameters;
import org.openqa.selenium.bidi.module.Permission;
import org.openqa.selenium.bidi.permissions.PermissionState;
import org.openqa.selenium.chrome.ChromeOptions;

public class EmulateLocationTest {
    Emulation emulation;
    List<String> tab;

    @BeforeEach
    void setUp() {
        // Turns on WebDriver BiDi, which lets the test change what the browser reports
        Configuration.browserCapabilities = new ChromeOptions().enableBiDi();
        open();
        emulation = new Emulation(getWebDriver());
        tab = List.of(getWebDriver().getWindowHandle());
    }

    @AfterEach
    void tearDown() {
        closeWebDriver();
    }

    @Test
    public void geolocation() {
        new Permission(getWebDriver()).setPermission(Map.of("name", "geolocation"), PermissionState.GRANTED,
                "https://the-internet.herokuapp.com");
        emulation.setGeolocationOverride(
                new SetGeolocationOverrideParameters(new GeolocationCoordinates(52.52, 13.405)).contexts(tab));

        open("https://the-internet.herokuapp.com/geolocation");
        $("button").click();
        $("#lat-value").shouldHave(exactText("52.52"));
        $("#long-value").shouldHave(exactText("13.405"));
    }

    @Test
    public void timeZoneAndLocale() {
        emulation.setTimezoneOverride(new SetTimezoneOverrideParameters("Asia/Tokyo").contexts(tab));
        // Selenium Java has no method for this BiDi command yet, so the test sends it
        ((HasBiDi) getWebDriver()).getBiDi().send(new Command<>("emulation.setLocaleOverride",
                Map.of("locale", "de-DE", "contexts", tab)));

        open("https://the-internet.herokuapp.com/locale");
        $("#browser-timezone").shouldHave(exactText("Asia/Tokyo"));
        $("#browser-language").shouldHave(exactText("de-DE"));
        $("#formatted-date").shouldHave(exactText("Mittwoch, 15. April 2026 um 21:00"));
        $("#formatted-number").shouldHave(exactText("1.234.567,891"));
        $("#greeting").shouldHave(exactText("Hallo!"));
    }
}
