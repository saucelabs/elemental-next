package com.elemental.selenium;

import com.deque.html.axecore.results.Rule;
import com.deque.html.axecore.selenium.AxeBuilder;
import java.util.Set;
import java.util.stream.Collectors;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CheckAccessibilityTest {
    // Rules the page breaks on purpose
    static final Set<String> KNOWN_ISSUES = Set.of("image-alt", "label", "select-name", "button-name", "link-name",
            "aria-roles", "heading-order");
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

    Set<String> scan() {
        // Checks only the part of the page with the examples
        return new AxeBuilder().include("#widgets").analyze(driver).getViolations().stream()
                .map(Rule::getId)
                .collect(Collectors.toSet());
    }

    @Test
    public void thePageHasTheKnownIssues() {
        driver.get("https://the-internet.herokuapp.com/accessibility_issues");

        Assertions.assertTrue(scan().containsAll(KNOWN_ISSUES));
    }

    @Test
    public void theFixedPageHasNoIssues() {
        driver.get("https://the-internet.herokuapp.com/accessibility_issues?fixed=true");

        Assertions.assertEquals(Set.of(), scan());
    }
}
