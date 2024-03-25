package com.elemental.selenium;

import com.codeborne.selenide.SelenideElement;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.switchTo;

public class FramesTest {
    @Test
    public void exampleOne() {
        open("https://the-internet.herokuapp.com/nested_frames");
        switchTo().frame("frame-top");
        switchTo().frame("frame-middle");
        $("#content").shouldHave(text("MIDDLE"));
    }

    @Test
    public void exampleTwo() {
        open("https://the-internet.herokuapp.com/tinymce");
        switchTo().frame("mce_0_ifr");

        SelenideElement editor = $(By.id("tinymce"));
        editor.shouldHave(text("Your content goes here."));
        editor.setValue("Hello World!");
        editor.shouldHave(text("Hello World!"));
        
        switchTo().defaultContent();
        $("h3").shouldHave(text("An iFrame containing the TinyMCE WYSIWYG Editor"));
    }
}