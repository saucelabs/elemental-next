export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [{browserName: 'chrome'}],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
    // Takes a screenshot when a test fails
    afterTest: async function (test, context, {passed}) {
        if (!passed) {
            const testName = `${test.parent} ${test.title}`.replace(/\s/g, '-');
            await browser.saveScreenshot(`failshot_${testName}.png`);
        }
    },
};
