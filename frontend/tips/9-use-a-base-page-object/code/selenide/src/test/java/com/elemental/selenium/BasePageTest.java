package com.elemental.selenium;

import org.junit.jupiter.api.Test;

public class BasePageTest {
    @Test
    void dynamicLoading() {
        DynamicLoadingPage dynamicLoading = new DynamicLoadingPage();
        dynamicLoading.start();
        dynamicLoading.shouldShowFinishText("Hello World!");
    }

    @Test
    void login() {
        LoginPage login = new LoginPage();
        login.loginAs("tomsmith", "SuperSecretPassword!");
        login.shouldShowSuccessMessage();
    }
}
