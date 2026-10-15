package com.elemental.selenium;

import java.time.Duration;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ABTestOptOutTest {
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

    @Test
    public void forgeCookieOnTargetPage() {
        driver.get("https://the-internet.herokuapp.com/abtest");
        String headingText = driver.findElement(By.tagName("h3")).getText();
        Assertions.assertTrue(List.of("A/B Test Variation 1", "A/B Test Control").contains(headingText));
        driver.manage().addCookie(new Cookie("optimizelyOptOut", "true"));
        driver.navigate().refresh();
        headingText = driver.findElement(By.tagName("h3")).getText();
        Assertions.assertEquals("No A/B Test", headingText);
    }

    @Test
    public void forgeCookieBeforeVisitingTargetPage() {
        driver.get("https://the-internet.herokuapp.com");
        driver.manage().addCookie(new Cookie("optimizelyOptOut", "true"));
        driver.get("https://the-internet.herokuapp.com/abtest");
        String headingText = driver.findElement(By.tagName("h3")).getText();
        Assertions.assertEquals("No A/B Test", headingText);
    }

    @Test
    public void urlParameter() {
        driver.get("https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.alertIsPresent()).dismiss();
        String headingText = wait.until(ExpectedConditions.presenceOfElementLocated(By.tagName("h3"))).getText();
        Assertions.assertEquals("No A/B Test", headingText);
    }
}
