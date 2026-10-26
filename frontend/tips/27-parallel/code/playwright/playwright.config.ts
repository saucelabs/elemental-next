import {defineConfig} from '@playwright/test';

export default defineConfig({
    // Runs every test in parallel, not only the test files
    fullyParallel: true,
    // Up to 4 browsers at the same time
    workers: 4,
});
