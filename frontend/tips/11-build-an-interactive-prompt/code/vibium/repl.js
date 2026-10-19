const readline = require('readline/promises');
const {browser} = require('vibium');

const AsyncFunction = async function () {}.constructor;

async function evaluate(command, page) {
    let fn;
    try {
        fn = new AsyncFunction('page', `return (${command});`);
    } catch (error) {
        fn = new AsyncFunction('page', command);
    }
    return fn(page);
}

async function runRepl(page, read, write) {
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
            write(`${error.name}: ${error.message}`);
        }
    }
}

if (require.main === module) {
    (async () => {
        const bro = await browser.start();
        const page = await bro.page();
        const rl = readline.createInterface({input: process.stdin, output: process.stdout});
        try {
            await runRepl(page, (prompt) => rl.question(prompt).catch(() => null), console.log);
        } finally {
            rl.close();
            await bro.stop();
        }
    })();
}

module.exports = {runRepl};
