const BROWSERS = ['chrome', 'firefox', 'MicrosoftEdge'];

export const config: WebdriverIO.Config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    // The Sauce service names each job and marks it as passed or failed on Sauce Labs
    services: [['sauce', {
        setJobName: (config, capabilities) =>
            `Elemental Selenium - Tip 41 - WebdriverIO - ${(capabilities as WebdriverIO.Capabilities).browserName}`,
    }]],
    specs: ['./test/**/*.e2e.ts'],
    // One browser at a time
    maxInstances: 1,
    capabilities: BROWSERS.map((browserName) => ({
        browserName,
        browserVersion: 'latest',
        platformName: 'Windows 11',
    })),
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
