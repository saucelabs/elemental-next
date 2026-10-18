import path from 'path';

// The folder where Chrome saves the downloaded files
export const downloadDir = path.join(process.cwd(), 'tmp');

export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            prefs: {
                'download.default_directory': downloadDir,
                'download.prompt_for_download': false,
            },
        },
    }],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
