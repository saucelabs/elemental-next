package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import javax.imageio.ImageIO;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CompareScreenshotsTest {
    static final String URL = "https://the-internet.herokuapp.com/visual_diff";
    Browser browser;
    Page page;

    @BeforeEach
    public void beforeEach() {
        browser = Vibium.start();
        page = browser.page();
    }

    @AfterEach
    public void afterEach() {
        if (browser != null) {
            browser.stop();
        }
    }

    BufferedImage cardScreenshot(String url) throws IOException {
        page.go(url);
        byte[] png = page.find("#card").screenshot();
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
