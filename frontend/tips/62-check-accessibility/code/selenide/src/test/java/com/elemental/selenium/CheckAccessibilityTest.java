package com.elemental.selenium;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

import com.deque.html.axecore.results.Rule;
import com.deque.html.axecore.selenium.AxeBuilder;
import java.util.Set;
import java.util.stream.Collectors;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class CheckAccessibilityTest {
    // Rules the page breaks on purpose
    static final Set<String> KNOWN_ISSUES = Set.of("image-alt", "label", "select-name", "button-name", "link-name",
            "aria-roles", "heading-order");

    Set<String> scan() {
        // Checks only the part of the page with the examples
        return new AxeBuilder().include("#widgets").analyze(getWebDriver()).getViolations().stream()
                .map(Rule::getId)
                .collect(Collectors.toSet());
    }

    @Test
    public void thePageHasTheKnownIssues() {
        open("https://the-internet.herokuapp.com/accessibility_issues");

        Assertions.assertTrue(scan().containsAll(KNOWN_ISSUES));
    }

    @Test
    public void theFixedPageHasNoIssues() {
        open("https://the-internet.herokuapp.com/accessibility_issues?fixed=true");

        Assertions.assertEquals(Set.of(), scan());
    }
}
