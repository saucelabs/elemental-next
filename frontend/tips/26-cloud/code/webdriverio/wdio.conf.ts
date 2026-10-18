// Runs the tests on Sauce Labs when the credentials are set. Otherwise the tests skip themselves, and the runner
// starts a local Chrome that is not used.
const onSauce = Boolean(process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY);

export const config: WebdriverIO.Config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [onSauce ? {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 11',
        'sauce:options': {
            name: 'Elemental Selenium - Tip 26 - WebdriverIO',
        },
    } : {browserName: 'chrome'}],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
