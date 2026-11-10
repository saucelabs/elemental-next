export const config: WebdriverIO.MultiRemoteConfig = {
    runner: 'local',
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    // Multiremote: one browser for each user, both in the same test
    capabilities: {
        alice: {capabilities: {browserName: 'chrome'}},
        bob: {capabilities: {browserName: 'chrome'}},
    },
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
