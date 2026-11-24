export const config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    // The Sauce service names each job and marks it as passed or failed on Sauce Labs
    services: [['sauce', {
        setJobName: (config, capabilities) =>
            `Elemental Selenium - Tip 77 - Appium JavaScript - ${capabilities.platformName}`,
    }]],
    specs: ['./test/**/*.e2e.js'],
    baseUrl: 'https://the-internet.herokuapp.com',
    // One device at a time
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Google.*',
        browserName: 'Chrome',
        'sauce:options': {appiumVersion: 'appium3-2026-11'},
    }, {
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone.*',
        browserName: 'Safari',
        'sauce:options': {appiumVersion: 'appium3-2026-11'},
    }],
    // Finding a free device can take a few minutes
    connectionRetryTimeout: 300000,
    connectionRetryCount: 1,
    waitforTimeout: 30000,
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 120000},
    // Skips the tests when the Sauce Labs credentials are not set
    onPrepare: () => {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
            process.exit(0);
        }
    },
};
