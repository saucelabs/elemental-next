package com.elemental.playwright;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import javax.imageio.ImageIO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

@UsePlaywright
class CompareScreenshotsTest {
    static final String URL = "https://the-internet.herokuapp.com/visual_diff";

    static BufferedImage cardScreenshot(Page page, String url) throws IOException {
        page.navigate(url);
        byte[] png = page.locator("#card").screenshot();
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
    void theSameCardHasNoDifferences(Page page) throws IOException {
        BufferedImage baseline = cardScreenshot(page, URL);

        Assertions.assertEquals(0, differentPixels(baseline, cardScreenshot(page, URL)));
    }

    @Test
    void aMovedButtonIsNoticed(Page page) throws IOException {
        BufferedImage baseline = cardScreenshot(page, URL);

        Assertions.assertTrue(differentPixels(baseline, cardScreenshot(page, URL + "?shift=10")) > 0);
    }
}
