const AsyncFunction = async function () {}.constructor;

async function evaluate(command: string, browser: WebdriverIO.Browser) {
    let fn;
    try {
        fn = new AsyncFunction('browser', `return (${command});`);
    } catch (error) {
        fn = new AsyncFunction('browser', command);
    }
    return fn(browser);
}

export async function runRepl(browser: WebdriverIO.Browser,
                              read: (prompt: string) => Promise<string | null | undefined>,
                              write: (line: unknown) => void) {
    while (true) {
        const command = await read('>> ');
        if (command === null || command === undefined) {
            break;
        }
        if (command === 'q') {
            write('Quitting...');
            break;
        }
        try {
            const result = await evaluate(command, browser);
            if (result !== undefined && result !== null) {
                write(result);
            }
        } catch (error) {
            write(`${(error as Error).name}: ${(error as Error).message}`);
        }
    }
}
