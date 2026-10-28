import {defineConfig} from '@playwright/test';

export default defineConfig({
    // One browser at a time
    workers: 1,
    // One project per browser: each test runs once in each of them
    projects: [
        {name: 'chromium', use: {browserName: 'chromium'}},
        {name: 'firefox', use: {browserName: 'firefox'}},
        {name: 'webkit', use: {browserName: 'webkit'}},
    ],
});
