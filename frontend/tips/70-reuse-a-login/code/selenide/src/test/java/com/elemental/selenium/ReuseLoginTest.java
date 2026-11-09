package com.elemental.selenium;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Cookie;

public class ReuseLoginTest {
    static final String BASE_URL = "https://the-internet.herokuapp.com";
    static Cookie sessionCookie;

    @BeforeAll
    static void logIn() {
        // Logs in through the form once, and keeps the session cookie of the logged-in user
        open(BASE_URL + "/login");
        $("#username").setValue("tomsmith");
        $("#password").setValue("SuperSecretPassword!");
        $("button[type='submit']").click();
        $("#username").shouldHave(exactText("tomsmith"));
        sessionCookie = getWebDriver().manage().getCookieNamed("rack.session");
        closeWebDriver();
    }

    @BeforeEach
    void addTheSessionCookie() {
        // A cookie can only be added for the site of the current page
        open(BASE_URL);
        getWebDriver().manage().addCookie(new Cookie(sessionCookie.getName(), sessionCookie.getValue()));
    }

    @AfterEach
    void tearDown() {
        closeWebDriver();
    }

    @Test
    public void theSecureAreaShowsTheUser() {
        open(BASE_URL + "/secure");

        $("#username").shouldHave(exactText("tomsmith"));
    }

    @Test
    public void logOut() {
        open(BASE_URL + "/secure");
        $("a[href='/logout']").click();

        $("#flash").shouldHave(text("You logged out of the secure area!"));
    }
}
