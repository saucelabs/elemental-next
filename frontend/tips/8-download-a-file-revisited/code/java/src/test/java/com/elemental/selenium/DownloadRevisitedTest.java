package com.elemental.selenium;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DownloadRevisitedTest {
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
    public void fileCanBeDownloaded() throws Exception {
        driver.get("https://the-internet.herokuapp.com/download");
        String link = driver.findElement(By.cssSelector(".example a")).getDomAttribute("href");
        URI uri = URI.create(driver.getCurrentUrl()).resolve(link);

        HttpRequest request = HttpRequest.newBuilder(uri)
            .method("HEAD", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<Void> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.discarding());
        String contentDisposition = response.headers().firstValue("Content-Disposition").orElse("");
        long contentLength = response.headers().firstValueAsLong("Content-Length").orElse(0);

        Assertions.assertTrue(contentDisposition.startsWith("attachment"));
        Assertions.assertTrue(contentLength > 0);
    }
}
