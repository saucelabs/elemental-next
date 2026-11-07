package com.elemental.selenium;

import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Selectors.byRole;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

import org.junit.jupiter.api.Test;

public class FindByRoleTest {
    @Test
    public void pickAFruit() {
        open("https://the-internet.herokuapp.com/custom_dropdown");

        $(byRole("combobox", "Fruit")).click();
        $(byRole("option", "Mango")).click();

        $(byRole("combobox", "Fruit")).shouldHave(exactText("Mango"));
        $("#result").shouldHave(exactText("Selected: mango"));
    }
}
