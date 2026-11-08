package com.elemental.selenium;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.closeWebDriver;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.WebDriverRunner.getSelenideProxy;
import static com.codeborne.selenide.proxy.RequestMatcher.HttpMethod.GET;
import static com.codeborne.selenide.proxy.RequestMatchers.urlStartsWith;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MockResponsesTest {
    @BeforeEach
    void setUp() {
        // Starts the browser behind Selenide's proxy, which can answer requests for the server
        Configuration.proxyEnabled = true;
        open("https://the-internet.herokuapp.com/slow_api");
    }

    @AfterEach
    void tearDown() {
        closeWebDriver();
    }

    @Test
    public void pageShowsTheMockedAnswer() {
        getSelenideProxy().responseMocker().mockText("slow-api",
                urlStartsWith(GET, "https://the-internet.herokuapp.com/slow_api/data"),
                () -> "{\"message\": \"Hello from the mock\"}");

        $("#call-api").click();
        $("#status-text").shouldHave(exactText("Hello from the mock"));
        $("#attempts li").shouldHave(exactText("200: Hello from the mock"));
    }
}
