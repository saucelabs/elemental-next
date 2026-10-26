package com.elemental.selenium;

import com.codeborne.selenide.junit5.BrowserPerTestStrategyExtension;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.io.File;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.DownloadOptions.using;
import static com.codeborne.selenide.FileDownloadMode.FOLDER;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.download;
import static com.codeborne.selenide.Selenide.open;
import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(BrowserPerTestStrategyExtension.class)
public class SecureDownloadTest {
  @Test
  public void filesBehindBasicAuth() {
    open("https://admin:admin@the-internet.herokuapp.com/download_secure");
    File file = $(".example a").download(using(FOLDER));
    assertThat(file).isNotEmpty();
  }

  @Test
  public void pageBehindFormLogin() throws Exception {
    open("https://the-internet.herokuapp.com/login");
    $("#username").setValue("tomsmith");
    $("#password").setValue("SuperSecretPassword!");
    $("#login button").click();
    $(".flash.success").shouldBe(visible);

    File page = download("https://the-internet.herokuapp.com/secure");
    assertThat(page).content().contains("Welcome to the Secure Area");
  }
}
