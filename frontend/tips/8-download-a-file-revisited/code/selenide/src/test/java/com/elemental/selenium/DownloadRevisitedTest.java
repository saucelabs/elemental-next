package com.elemental.selenium;

import org.junit.jupiter.api.Test;

import java.io.File;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.download;
import static com.codeborne.selenide.Selenide.open;
import static org.assertj.core.api.Assertions.assertThat;

public class DownloadRevisitedTest {
  @Test
  public void downloadFileByUrl() throws Exception {
    File file = download("https://selenide.org/test-page/download/hello-world.txt");

    assertThat(file).hasName("hello-world.txt");
    assertThat(file).content().contains("Hello, world!");
  }

  @Test
  public void downloadFileByLinkFromPage() throws Exception {
    open("https://the-internet.herokuapp.com/download");
    String url = $(".example a").getAttribute("href");

    File file = download(url);

    assertThat(file).isNotEmpty();
  }
}
