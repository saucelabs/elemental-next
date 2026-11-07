package com.elemental.selenium;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Condition.exist;
import static com.codeborne.selenide.Selectors.shadowCss;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ShadowDomTest {
    @BeforeEach
    void openPage() {
        open("https://the-internet.herokuapp.com/shadowdom_advanced");
    }

    @Test
    public void clickAButtonInsideNestedShadowRoots() {
        // The element to find, then the shadow hosts on the way to it, from the outermost
        $(shadowCss("#inner-button", "#outer-card", "#inner-card")).click();

        $("#nested-result").shouldHave(exactText("You clicked the button in the inner shadow root"));
    }

    @Test
    public void aNormalLocatorDoesNotFindIt() {
        $("#inner-button").shouldNot(exist);
    }
}
