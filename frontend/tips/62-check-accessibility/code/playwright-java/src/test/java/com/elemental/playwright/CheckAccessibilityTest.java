package com.elemental.playwright;

import com.deque.html.axecore.playwright.AxeBuilder;
import com.deque.html.axecore.results.Rule;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.junit.UsePlaywright;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

@UsePlaywright
class CheckAccessibilityTest {
    // Rules the page breaks on purpose
    static final Set<String> KNOWN_ISSUES = Set.of("image-alt", "label", "select-name", "button-name", "link-name",
            "aria-roles", "heading-order");

    Set<String> scan(Page page) {
        // Checks only the part of the page with the examples
        return new AxeBuilder(page).include(List.of("#widgets")).analyze().getViolations().stream()
                .map(Rule::getId)
                .collect(Collectors.toSet());
    }

    @Test
    void thePageHasTheKnownIssues(Page page) {
        page.navigate("https://the-internet.herokuapp.com/accessibility_issues");

        Assertions.assertTrue(scan(page).containsAll(KNOWN_ISSUES));
    }

    @Test
    void theFixedPageHasNoIssues(Page page) {
        page.navigate("https://the-internet.herokuapp.com/accessibility_issues?fixed=true");

        Assertions.assertEquals(Set.of(), scan(page));
    }
}
