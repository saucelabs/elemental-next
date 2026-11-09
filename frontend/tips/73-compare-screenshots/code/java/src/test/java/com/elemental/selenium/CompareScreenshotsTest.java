package com.elemental.selenium;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import javax.imageio.ImageIO;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CompareScreenshotsTest {
    static final String URL = "https://the-internet.herokuapp.com/visual_diff";
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

    BufferedImage cardScreenshot(String url) throws IOException {
        driver.get(url);
        byte[] png = driver.findElement(By.id("card")).getScreenshotAs(OutputType.BYTES);
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
