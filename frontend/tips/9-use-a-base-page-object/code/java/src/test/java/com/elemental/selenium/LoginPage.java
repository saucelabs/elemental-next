package com.elemental.selenium;

import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage extends BasePage {
    private static final By USERNAME_INPUT = By.id("username");
    private static final By PASSWORD_INPUT = By.id("password");
    private static final By SUBMIT_BUTTON = By.cssSelector("#login button");
    private static final By SUCCESS_MESSAGE = By.cssSelector(".flash.success");

    public LoginPage(WebDriver driver) {
        super(driver);
        visit("/login");
        Assertions.assertEquals("The Internet", title());
    }

    public void loginAs(String username, String password) {
        type(USERNAME_INPUT, username);
        type(PASSWORD_INPUT, password);
        click(SUBMIT_BUTTON);
    }

    public boolean successMessagePresent() {
        waitFor(SUCCESS_MESSAGE);
        return isDisplayed(SUCCESS_MESSAGE);
    }
}
