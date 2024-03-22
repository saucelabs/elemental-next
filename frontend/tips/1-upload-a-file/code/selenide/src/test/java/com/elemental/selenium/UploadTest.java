package com.elemental.selenium;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;

public class UploadTest {
  @BeforeEach
  void openAUT() {
    open("https://the-internet.herokuapp.com/upload");
  }

  @Test
  public void uploadFile() {
    $("#file-upload").uploadFromClasspath("selenide-intro.txt");
    $("#file-submit").click();
    $("#uploaded-files").shouldHave(text("selenide-intro.txt"));
  }

  @Test
  public void uploadFileUsingPath() {
    $("#file-upload").uploadFile(new File("src/test/resources/selenide-intro.txt"));
    $("#file-submit").click();
    $("#uploaded-files").shouldHave(text("selenide-intro.txt"));
  }
}