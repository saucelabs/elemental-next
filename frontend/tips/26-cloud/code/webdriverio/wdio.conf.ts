// Runs the tests on Sauce Labs when the credentials are set. Otherwise the tests skip themselves, and the runner
// starts a local Chrome that is not used.
const onSauce = Boolean(process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY);

export const config: WebdriverIO.Config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    // The Sauce service names each job and marks it as passed or failed on Sauce Labs
    services: onSauce ? [['sauce', {
        setJobName: (config, capabilities, suiteTitle) => `Elemental Selenium - Tip 26 - WebdriverIO - ${suiteTitle}`,
    }]] : [],
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [onSauce ? {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 11',
    } : {browserName: 'chrome'}],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
