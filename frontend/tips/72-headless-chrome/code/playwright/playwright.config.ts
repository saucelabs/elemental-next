import {defineConfig} from '@playwright/test';

export default defineConfig({
    use: {
        // Runs the browser without a window. It's the default, set here to make it visible
        headless: true,
    },
});
