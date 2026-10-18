const gridUrl = new URL(process.env.GRID_URL || 'http://localhost:4444');

// Runs the tests on the Grid when it is running. Otherwise the tests skip themselves, and the runner starts a local
// Chrome that is not used.
export const gridIsRunning = await fetch(new URL('/status', gridUrl)).then((response) => response.ok, () => false);

export const config: WebdriverIO.Config = {
    runner: 'local',
    ...(gridIsRunning && {
        protocol: gridUrl.protocol.replace(':', ''),
        hostname: gridUrl.hostname,
        port: Number(gridUrl.port),
        path: '/',
    }),
    specs: ['./test/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [{browserName: 'chrome'}],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {timeout: 60000},
};
