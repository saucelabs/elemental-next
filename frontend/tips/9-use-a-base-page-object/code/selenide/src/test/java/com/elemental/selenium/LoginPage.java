package com.elemental.selenium;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

public class LoginPage extends BasePage {
    public LoginPage() {
        visit("/login");
    }

    public void loginAs(String username, String password) {
        $("#username").setValue(username);
        $("#password").setValue(password);
        $("#login button").click();
    }

    public void shouldShowSuccessMessage() {
        $(".flash.success").shouldBe(visible);
    }
}
