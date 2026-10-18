export const config: WebdriverIO.Config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    // The Sauce service names each job and marks it as passed or failed on Sauce Labs
    services: [['sauce', {
        setJobName: (config, capabilities, suiteTitle) => `Elemental Selenium - Tip 26 - WebdriverIO - ${suiteTitle}`,
    }]],
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 11',
    }],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
