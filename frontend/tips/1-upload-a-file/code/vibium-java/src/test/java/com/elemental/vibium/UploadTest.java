package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import com.vibium.types.SelectorOptions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.util.List;

public class UploadTest {
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

    @Test
    public void uploadFile() {
        String fileName = "some-file.txt";
        String path = new File(fileName).getAbsolutePath();

        page.go("https://the-internet.herokuapp.com/upload");
        page.find(new SelectorOptions().css("#file-upload")).setFiles(List.of(path));
        page.find(new SelectorOptions().css("#file-submit")).click();

        String text = page.find(new SelectorOptions().css("#uploaded-files")).text();
        Assertions.assertEquals(fileName, text);
    }
}
