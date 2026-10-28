import {defineConfig} from '@playwright/test';

export default defineConfig({
    // Runs a failed test again, up to 9 more times
    retries: 9,
});
