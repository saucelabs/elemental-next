// Runs the tests on Sauce Labs when the credentials are set. Otherwise the tests skip themselves, and the runner
// starts a local Chrome that is not used.
const onSauce = Boolean(process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY);

const BROWSERS = ['chrome', 'firefox', 'MicrosoftEdge'];

export const config: WebdriverIO.Config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    // The Sauce service names each job and marks it as passed or failed on Sauce Labs
    services: onSauce ? [['sauce', {
        setJobName: (config, capabilities) =>
            `Elemental Selenium - Tip 41 - WebdriverIO - ${(capabilities as WebdriverIO.Capabilities).browserName}`,
    }]] : [],
    specs: ['./test/**/*.e2e.ts'],
    // One browser at a time
    maxInstances: 1,
    capabilities: onSauce ? BROWSERS.map((browserName) => ({
        browserName,
        browserVersion: 'latest',
        platformName: 'Windows 11',
    })) : [{browserName: 'chrome'}],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
