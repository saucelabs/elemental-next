import type {Page} from '@playwright/test';

const AsyncFunction = async function () {}.constructor;

async function evaluate(command: string, page: Page) {
    let fn;
    try {
        fn = new AsyncFunction('page', `return (${command});`);
    } catch (error) {
        fn = new AsyncFunction('page', command);
    }
    return fn(page);
}

export async function runRepl(page: Page, read: (prompt: string) => Promise<string | null | undefined>,
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
            const result = await evaluate(command, page);
            if (result !== undefined && result !== null) {
                write(result);
            }
        } catch (error) {
            write(`${(error as Error).name}: ${(error as Error).message}`);
        }
    }
}
