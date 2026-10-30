package com.elemental.playwright;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.microsoft.playwright.APIResponse;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@UsePlaywright
class BrokenImagesTest {

    @BeforeEach
    void visitBrokenImagesPage(Page page) {
        page.navigate("https://the-internet.herokuapp.com/broken_images");
    }

    @Test
    @SuppressWarnings("unchecked")
    void findWithHttpRequest(Page page) {
        List<String> sources = (List<String>) page.locator("img")
                .evaluateAll("images => images.map(image => image.src)");
        List<String> brokenImages = new ArrayList<>();
        for (String source : sources) {
            APIResponse response = page.request().get(source);
            if (response.status() != 200) {
                brokenImages.add(source);
            }
        }
        System.out.println(brokenImages);
        List<String> fileNames = brokenImages.stream().map(source -> source.substring(source.lastIndexOf('/') + 1))
                .toList();
        assertEquals(List.of("asdf.jpg", "hjkl.jpg"), fileNames);
    }

    @Test
    @SuppressWarnings("unchecked")
    void findWithJavaScript(Page page) {
        List<String> sources = (List<String>) page.locator("img").evaluateAll("""
                images => images
                    .filter(image => !(image.complete && image.naturalWidth > 0))
                    .map(image => image.getAttribute('src'))""");
        System.out.println(sources);
        assertEquals(List.of("asdf.jpg", "hjkl.jpg"), sources);
    }
}
