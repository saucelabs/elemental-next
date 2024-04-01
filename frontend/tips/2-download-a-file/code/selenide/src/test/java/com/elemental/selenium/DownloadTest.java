package com.elemental.selenium;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;

import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static org.assertj.core.api.Assertions.assertThat;

public class DownloadTest {
  @BeforeEach
  public void openAUT() {
    open("https://selenide.org/test-page/download.html");
  }

  @Test
  public void downloadFile() {
    File file = $(byText("hello-world.txt")).download();

    assertThat(file).hasName("hello-world.txt");
    assertThat(file).content().contains("Hello, world!");
  }
}