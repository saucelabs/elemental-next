package com.elemental.selenium;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.executeJavaScript;
import static com.codeborne.selenide.Selenide.open;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class BrokenImagesTest {
  private static final String LOADED_SCRIPT = "return arguments[0].complete "
    + "&& typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0";

  private final ElementsCollection allImages = $$("img");

  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/broken_images");
  }

  @Test
  public void brokenImagesWithAnHttpLibrary() throws Exception {
    HttpClient httpClient = HttpClient.newHttpClient();
    List<String> brokenImages = new ArrayList<>();
    for (SelenideElement image : allImages) {
      String source = image.getDomProperty("src");
      HttpRequest request = HttpRequest.newBuilder(URI.create(source)).build();
      if (httpClient.send(request, HttpResponse.BodyHandlers.discarding()).statusCode() != 200) {
        brokenImages.add(source);
      }
    }
    System.out.println(brokenImages);
    assertEquals(List.of("asdf.jpg", "hjkl.jpg"),
      brokenImages.stream().map(source -> source.substring(source.lastIndexOf('/') + 1)).toList());
  }

  @Test
  public void brokenImagesWithJavaScript() {
    List<String> sources = allImages.asDynamicIterable().stream()
      .filter(image -> !(Boolean) executeJavaScript(LOADED_SCRIPT, image))
      .map(image -> image.getDomAttribute("src"))
      .toList();
    System.out.println(sources);
    assertEquals(List.of("asdf.jpg", "hjkl.jpg"), sources);
  }
}
