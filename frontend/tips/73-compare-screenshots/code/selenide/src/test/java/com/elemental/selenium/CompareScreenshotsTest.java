package com.elemental.selenium;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

import com.codeborne.selenide.Configuration;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import javax.imageio.ImageIO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.OutputType;

public class CompareScreenshotsTest {
    static final String URL = "https://the-internet.herokuapp.com/visual_diff";

    @BeforeAll
    static void useFirefox() {
        Configuration.browser = "firefox";
    }

    BufferedImage cardScreenshot(String url) throws IOException {
        open(url);
        // Firefox takes the screenshot of the whole element, even when part of it is out of view
        byte[] png = $("#card").toWebElement().getScreenshotAs(OutputType.BYTES);
        return ImageIO.read(new ByteArrayInputStream(png));
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
    public void theSameCardHasNoDifferences() throws IOException {
        BufferedImage baseline = cardScreenshot(URL);

        Assertions.assertEquals(0, differentPixels(baseline, cardScreenshot(URL)));
    }

    @Test
    public void aMovedButtonIsNoticed() throws IOException {
        BufferedImage baseline = cardScreenshot(URL);

        Assertions.assertTrue(differentPixels(baseline, cardScreenshot(URL + "?shift=10")) > 0);
    }
}
