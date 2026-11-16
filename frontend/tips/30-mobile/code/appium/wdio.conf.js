export const config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    // The Sauce service names each job and marks it as passed or failed on Sauce Labs
    services: [['sauce', {
        setJobName: (config, capabilities) =>
            `Elemental Selenium - Tip 30 - Appium JavaScript - ${capabilities.platformName}`,
    }]],
    specs: ['./test/**/*.e2e.js'],
    // One device at a time
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Google.*',
        'appium:app': 'https://github.com/saucelabs/my-demo-app-android/releases/download/2.3.0/mda-2.3.0-27.apk',
        'sauce:options': {appiumVersion: 'latest'},
    }, {
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone.*',
        'appium:app': 'https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa',
        'sauce:options': {appiumVersion: 'latest'},
    }],
    // Finding a free device and installing the app can take a few minutes
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
