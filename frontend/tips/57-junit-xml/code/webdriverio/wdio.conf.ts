export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [{browserName: 'chrome'}],
    framework: 'mocha',
    // The spec reporter prints the results, and the JUnit reporter saves them as XML in the reports folder
    reporters: ['spec', ['junit', {
        outputDir: './reports',
        outputFileFormat: (options) => `results-${options.cid}.xml`,
    }]],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
