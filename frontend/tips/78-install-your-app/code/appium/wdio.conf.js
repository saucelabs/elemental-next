export const config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    services: [['sauce', {
        setJobName: (config, capabilities) =>
            `Elemental Selenium - Tip 78 - Appium JavaScript - ${capabilities.platformName}`,
    }]],
    specs: ['./test/**/*.e2e.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Google.*',
        'appium:app': 'storage:filename=mda-2.3.0-27.apk',
        'sauce:options': {appiumVersion: 'latest'},
    }, {
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone.*',
        'appium:app': 'storage:filename=SauceLabs-Demo-App.ipa',
        'sauce:options': {appiumVersion: 'latest'},
    }],
    connectionRetryTimeout: 300000,
    connectionRetryCount: 1,
    waitforTimeout: 30000,
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 120000},
    onPrepare: () => {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
            process.exit(0);
        }
    },
};
