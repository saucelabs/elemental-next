package com.elemental.selenium;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

import java.awt.image.BufferedImage;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class CompareScreenshotsTest {
    static final String URL = "https://the-internet.herokuapp.com/visual_diff";

    BufferedImage cardScreenshot(String url) {
        open(url);
        return $("#card").screenshotAsImage();
    }

    static int differentPixels(BufferedImage image, BufferedImage other) {
        // Images of different sizes differ everywhere
        if (image.getWidth() != other.getWidth() || image.getHeight() != other.getHeight()) {
            return image.getWidth() * image.getHeight();
        }
        int different = 0;
        for (int x = 0; x < image.getWidth(); x++) {
            for (int y = 0; y < image.getHeight(); y++) {
                if (image.getRGB(x, y) != other.getRGB(x, y)) {
                    different++;
                }
            }
        }
        return different;
    }

    @Test
    public void theSameCardHasNoDifferences() {
        BufferedImage baseline = cardScreenshot(URL);

        Assertions.assertEquals(0, differentPixels(baseline, cardScreenshot(URL)));
    }

    @Test
    public void aMovedButtonIsNoticed() {
        BufferedImage baseline = cardScreenshot(URL);

        Assertions.assertTrue(differentPixels(baseline, cardScreenshot(URL + "?shift=10")) > 0);
    }
}
