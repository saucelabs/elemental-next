package com.elemental.selenium;

import com.codeborne.selenide.SelenideElement;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.CollectionCondition.texts;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

public class DropdownTest {
    private final SelenideElement dropdownList = $("#dropdown");

    @BeforeEach
    void openAUT() {
        open("https://the-internet.herokuapp.com/dropdown");
    }

    @Test
    void checkAvailableOptions() {
        dropdownList.getOptions()
          .shouldHave(texts("Please select an option", "Option 1", "Option 2"));
    }

    @Test
    void canSelectOptionByText() {
        dropdownList.selectOption("Option 1");
        dropdownList.getSelectedOption().shouldHave(text("Option 1"));
    }

    @Test
    void canSelectOptionByValue() {
        dropdownList.selectOptionByValue("2");
        dropdownList.getSelectedOption().shouldHave(text("Option 2"));
    }
}