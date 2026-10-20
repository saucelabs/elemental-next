package com.elemental.vibium;

import com.vibium.Page;
import org.junit.jupiter.api.extension.AfterTestExecutionCallback;
import org.junit.jupiter.api.extension.ExtensionContext;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.function.Supplier;

public class ScreenshotOnFailure implements AfterTestExecutionCallback {
    private final Supplier<Page> page;

    public ScreenshotOnFailure(Supplier<Page> page) {
        this.page = page;
    }

    @Override
    public void afterTestExecution(ExtensionContext context) throws IOException {
        if (context.getExecutionException().isPresent()) {
            byte[] screenshot = page.get().screenshot();
            String testName = context.getRequiredTestClass().getSimpleName() + "." + context.getRequiredTestMethod().getName();
            Files.write(Path.of("failshot_" + testName + ".png"), screenshot);
        }
    }
}
