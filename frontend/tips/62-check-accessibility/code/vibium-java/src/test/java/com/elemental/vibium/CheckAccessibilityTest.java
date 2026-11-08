package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Page;
import com.vibium.Vibium;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CheckAccessibilityTest {
    static final String AXE_CORE = "https://cdn.jsdelivr.net/npm/axe-core@4.14.0/axe.min.js";
    // Rules the page breaks on purpose
    static final Set<String> KNOWN_ISSUES = Set.of("image-alt", "label", "select-name", "button-name", "link-name",
            "aria-roles", "heading-order");
    static String axeSource;
    Browser browser;
    Page page;

    @BeforeAll
    public static void downloadAxeCore() throws IOException, InterruptedException {
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder(URI.create(AXE_CORE)).build();
            axeSource = client.send(request, HttpResponse.BodyHandlers.ofString()).body();
        }
    }

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

    @SuppressWarnings("unchecked")
    Set<String> scan() {
        // Adds axe-core to the page, then runs it there on the part of the page with the examples
        page.evaluate(axeSource);
        Map<String, Object> results = (Map<String, Object>) page.evaluate("axe.run('#widgets')");
        return ((List<Map<String, Object>>) results.get("violations")).stream()
                .map(violation -> (String) violation.get("id"))
                .collect(Collectors.toSet());
    }

    @Test
    public void thePageHasTheKnownIssues() {
        page.go("https://the-internet.herokuapp.com/accessibility_issues");

        Assertions.assertTrue(scan().containsAll(KNOWN_ISSUES));
    }

    @Test
    public void theFixedPageHasNoIssues() {
        page.go("https://the-internet.herokuapp.com/accessibility_issues?fixed=true");

        Assertions.assertEquals(Set.of(), scan());
    }
}
