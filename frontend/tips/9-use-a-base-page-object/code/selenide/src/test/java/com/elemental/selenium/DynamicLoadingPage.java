package com.elemental.selenium;

import java.time.Duration;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;

public class DynamicLoadingPage extends BasePage {
    public DynamicLoadingPage() {
        visit("/dynamic_loading/2");
    }

    public void start() {
        $("#start button").click();
    }

    public void shouldShowFinishText(String expectedText) {
        $("#finish").shouldHave(text(expectedText), Duration.ofSeconds(10));
    }
}
