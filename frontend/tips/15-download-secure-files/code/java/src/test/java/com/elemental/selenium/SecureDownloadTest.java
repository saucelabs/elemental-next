package com.elemental.selenium;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Base64;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SecureDownloadTest {
    private static final String BASE_URL = "https://the-internet.herokuapp.com";
    private final HttpClient httpClient = HttpClient.newHttpClient();

    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void filesBehindBasicAuth() throws Exception {
        driver.get("https://admin:admin@the-internet.herokuapp.com/download_secure");
        List<String> links = driver.findElements(By.cssSelector(".example a")).stream()
            .map(link -> link.getDomAttribute("href"))
            .toList();
        Assertions.assertFalse(links.isEmpty());

        String credentials = Base64.getEncoder().encodeToString("admin:admin".getBytes());
        for (String link : links) {
            HttpRequest request = HttpRequest.newBuilder(URI.create(BASE_URL + "/" + link))
                .method("HEAD", HttpRequest.BodyPublishers.noBody())
                .header("Authorization", "Basic " + credentials)
                .build();
            HttpResponse<Void> response = httpClient.send(request, HttpResponse.BodyHandlers.discarding());
            Assertions.assertEquals(200, response.statusCode(), link);
        }
    }

    @Test
    public void pageBehindFormLogin() throws Exception {
        driver.get(BASE_URL + "/login");
        driver.findElement(By.id("username")).sendKeys("tomsmith");
        driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!");
        driver.findElement(By.cssSelector("#login button")).click();
        new WebDriverWait(driver, Duration.ofSeconds(10))
            .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".flash.success")));

        Cookie cookie = driver.manage().getCookieNamed("rack.session");
        HttpRequest withCookie = HttpRequest.newBuilder(URI.create(BASE_URL + "/secure"))
            .header("Cookie", cookie.getName() + "=" + cookie.getValue())
            .build();
        Assertions.assertEquals(200,
            httpClient.send(withCookie, HttpResponse.BodyHandlers.discarding()).statusCode());

        HttpRequest withoutCookie = HttpRequest.newBuilder(URI.create(BASE_URL + "/secure")).build();
        Assertions.assertEquals(302,
            httpClient.send(withoutCookie, HttpResponse.BodyHandlers.discarding()).statusCode());
    }
}
