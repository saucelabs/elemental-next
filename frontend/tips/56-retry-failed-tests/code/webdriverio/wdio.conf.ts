export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [{browserName: 'chrome'}],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    // Runs a failed test again, up to 9 more times
    mochaOpts: {timeout: 60000, retries: 9},
};
