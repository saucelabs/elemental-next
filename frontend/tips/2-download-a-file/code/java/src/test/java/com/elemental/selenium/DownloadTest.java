package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.File;
import java.util.UUID;
import java.time.Duration;

public class DownloadTest {
    WebDriver driver;
    File folder;

    @BeforeEach
    public void beforeEach() {
        folder = new File(UUID.randomUUID().toString());
        folder.mkdir();
        FirefoxOptions options = new FirefoxOptions();
        options.addPreference("browser.download.dir", folder.getAbsolutePath());
        options.addPreference("browser.download.folderList", 2);
        options.addPreference("browser.helperApps.neverAsk.saveToDisk",
                "image/jpeg, application/pdf, application/octet-stream");
        options.addPreference("pdfjs.disabled", true);
        driver = new FirefoxDriver(options);
    }

    @AfterEach
    public void afterEach() {
        if (driver != null) {
          driver.quit();
        }
        for (File file: folder.listFiles()) {
            file.delete();
        }
        folder.delete();
    }

    @Test
    public void downloadFile() throws Exception {
        driver.get("https://the-internet.herokuapp.com/download");
        driver.findElement(By.cssSelector(".example a")).click();

        // Wait for the file to be downloaded up to 5 seconds
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until((WebDriver d) -> folder.listFiles().length > 0 && folder.listFiles()[0].length() > 0);

        File[] listOfFiles = folder.listFiles();
        // Make sure the directory is not empty
        Assertions.assertTrue(listOfFiles.length > 0);
        for (File file : listOfFiles) {
            // Make sure the downloaded file(s) is(are) not empty
            Assertions.assertTrue(file.length() > 0);
        }
    }

}