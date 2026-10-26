import {defineConfig} from '@playwright/test';

export default defineConfig({
    // The list reporter prints the results, and the JUnit reporter saves them as XML in the reports folder
    reporter: [['list'], ['junit', {outputFile: 'reports/results.xml'}]],
});
