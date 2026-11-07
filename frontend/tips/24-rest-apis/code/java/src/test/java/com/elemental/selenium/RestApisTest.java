package com.elemental.selenium;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.UUID;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RestApisTest {
    static final String BASE_URL = "https://the-internet.herokuapp.com";
    static final String PASSWORD = "SuperSecret123";
    HttpClient http = HttpClient.newHttpClient();
    WebDriver driver;
    String user;

    @BeforeEach
    public void beforeEach() throws Exception {
        // A unique name, so tests that run at the same time don't share a user
        user = "user-" + UUID.randomUUID().toString().substring(0, 12);
        HttpResponse<String> response = post("/api/users", user);
        Assertions.assertEquals(201, response.statusCode());
        driver = new ChromeDriver();
    }

    @AfterEach
    public void afterEach() throws Exception {
        if (driver != null) {
            driver.quit();
        }
        HttpRequest request = HttpRequest.newBuilder(URI.create(BASE_URL + "/api/users/" + user)).DELETE().build();
        http.send(request, HttpResponse.BodyHandlers.discarding());
    }

    HttpResponse<String> post(String path, String username) throws Exception {
        String json = String.format("{\"username\": \"%s\", \"password\": \"%s\"}", username, PASSWORD);
        HttpRequest request = HttpRequest.newBuilder(URI.create(BASE_URL + path))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
        return http.send(request, HttpResponse.BodyHandlers.ofString());
    }

    String loggedInUser() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("span#username"))).getText();
    }

    @Test
    public void logInWithANewUser() {
        driver.get(BASE_URL + "/login");
        driver.findElement(By.id("username")).sendKeys(user);
        driver.findElement(By.id("password")).sendKeys(PASSWORD);
        driver.findElement(By.cssSelector("button[type='submit']")).click();
        Assertions.assertEquals(user, loggedInUser());
    }

    @Test
    public void skipTheLoginForm() throws Exception {
        HttpResponse<String> response = post("/api/sessions", user);
        Assertions.assertEquals(200, response.statusCode());
        // The cookie header looks like "rack.session=<value>; path=/; ...", so we keep the value
        String cookie = response.headers().firstValue("Set-Cookie").orElseThrow().split(";")[0];
        String value = cookie.substring(cookie.indexOf('=') + 1);
        // The browser accepts cookies only for the site it shows, so we open a page of the site first
        driver.get(BASE_URL + "/login");
        driver.manage().addCookie(new Cookie("rack.session", value));
        driver.get(BASE_URL + "/secure");
        Assertions.assertEquals(user, loggedInUser());
    }
}
