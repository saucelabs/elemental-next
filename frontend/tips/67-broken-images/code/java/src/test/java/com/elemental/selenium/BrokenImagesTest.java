package com.elemental.selenium;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrokenImagesTest {
    private static final String LOADED_SCRIPT = "return arguments[0].complete "
        + "&& typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0";

    WebDriver driver;
    List<WebElement> allImages;

    @BeforeEach
    public void beforeEach() {
        driver = new FirefoxDriver();
        driver.get("https://the-internet.herokuapp.com/broken_images");
        allImages = driver.findElements(By.tagName("img"));
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void brokenImagesWithAnHttpLibrary() throws Exception {
        HttpClient httpClient = HttpClient.newHttpClient();
        List<String> brokenImages = new ArrayList<>();
        for (WebElement image : allImages) {
            String source = image.getDomProperty("src");
            HttpRequest request = HttpRequest.newBuilder(URI.create(source)).build();
            if (httpClient.send(request, HttpResponse.BodyHandlers.discarding()).statusCode() != 200) {
                brokenImages.add(source);
            }
        }
        System.out.println(brokenImages);
        Assertions.assertEquals(List.of("asdf.jpg", "hjkl.jpg"),
            brokenImages.stream().map(source -> source.substring(source.lastIndexOf('/') + 1)).toList());
    }

    @Test
    public void brokenImagesWithJavaScript() {
        List<String> sources = allImages.stream()
            .filter(image -> !(Boolean) ((JavascriptExecutor) driver).executeScript(LOADED_SCRIPT, image))
            .map(image -> image.getDomAttribute("src"))
            .toList();
        System.out.println(sources);
        Assertions.assertEquals(List.of("asdf.jpg", "hjkl.jpg"), sources);
    }
}
