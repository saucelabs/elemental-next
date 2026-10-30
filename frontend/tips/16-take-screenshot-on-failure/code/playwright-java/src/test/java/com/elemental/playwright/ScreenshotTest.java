package com.elemental.playwright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.assertions.LocatorAssertions;
import com.microsoft.playwright.junit.UsePlaywright;
import java.nio.file.Path;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.junit.jupiter.api.extension.TestWatcher;

@UsePlaywright
class ScreenshotTest {

    private Page page;

    @RegisterExtension
    TestWatcher screenshotOnFailure = new TestWatcher() {
        @Override
        public void testFailed(ExtensionContext context, Throwable cause) {
            String name = context.getRequiredTestClass().getName() + "." + context.getRequiredTestMethod().getName();
            page.screenshot(new Page.ScreenshotOptions().setPath(Path.of("failshot_" + name + ".png")));
        }
    };

    @BeforeEach
    void setUp(Page page) {
        this.page = page;
    }

    @Test
    void failsOnPurpose() {
        page.navigate("https://the-internet.herokuapp.com");

        assertThat(page.locator("h1"))
                .hasText("blah blah blah", new LocatorAssertions.HasTextOptions().setTimeout(2000));
    }
}
