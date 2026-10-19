export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./test/**/*.e2e.ts'],
    // Runs up to two spec files at the same time, each one in its own browser
    maxInstances: 2,
    capabilities: [{browserName: 'chrome'}],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
