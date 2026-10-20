package com.elemental.vibium;

import com.vibium.Page;

public class LoginPage extends BasePage {
    private static final String USERNAME_INPUT = "#username";
    private static final String PASSWORD_INPUT = "#password";
    private static final String SUBMIT_BUTTON = "#login button";
    private static final String SUCCESS_MESSAGE = ".flash.success";

    public LoginPage(Page page) {
        super(page);
    }

    public void load() {
        visit("/login");
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
