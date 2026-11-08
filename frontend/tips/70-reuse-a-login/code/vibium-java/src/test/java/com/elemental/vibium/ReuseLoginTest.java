package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.Cookie;
import com.vibium.types.SetCookieParam;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ReuseLoginTest {
    static final String BASE_URL = "https://the-internet.herokuapp.com";
    static Cookie sessionCookie;
    Browser browser;
    Page page;

    @BeforeAll
    public static void logIn() {
        // Logs in through the form once, and keeps the session cookie of the logged-in user
        Browser loginBrowser = Vibium.start();
        try {
            Page loginPage = loginBrowser.page();
            loginPage.go(BASE_URL + "/login");
            loginPage.find("#username").fill("tomsmith");
            loginPage.find("#password").fill("SuperSecretPassword!");
            loginPage.find("button[type='submit']").click();
            loginPage.find("#username");
            sessionCookie = loginPage.context().cookies().stream()
                    .filter(cookie -> cookie.name().equals("rack.session"))
                    .findFirst()
                    .orElseThrow();
        } finally {
            loginBrowser.stop();
        }
    }

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
        page.context().setCookies(List.of(
                new SetCookieParam(sessionCookie.name(), sessionCookie.value()).url(BASE_URL).sameSite("lax")));
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    @Test
    public void theSecureAreaShowsTheUser() {
        page.go(BASE_URL + "/secure");

        Assertions.assertEquals("tomsmith", page.find("#username").text());
    }

    @Test
    public void logOut() {
        page.go(BASE_URL + "/secure");
        page.find("a[href='/logout']").click();

        Assertions.assertTrue(page.find("#flash").text().contains("You logged out of the secure area!"));
    }
}
