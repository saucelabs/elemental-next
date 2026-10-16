const readline = require("readline/promises");
const {Builder, By} = require("selenium-webdriver");

const AsyncFunction = async function () {}.constructor;

async function evaluate(command, driver) {
    let fn;
    try {
        fn = new AsyncFunction("driver", "By", `return (${command});`);
    } catch (error) {
        fn = new AsyncFunction("driver", "By", command);
    }
    return fn(driver, By);
}

async function runRepl(driver, read, write) {
    while (true) {
        const command = await read(">> ");
        if (command === null || command === undefined) {
            break;
        }
        if (command === "q") {
            write("Quitting...");
            break;
        }
        try {
            const result = await evaluate(command, driver);
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
        const driver = await new Builder().forBrowser("firefox").build();
        const rl = readline.createInterface({input: process.stdin, output: process.stdout});
        try {
            await runRepl(driver, (prompt) => rl.question(prompt).catch(() => null), console.log);
        } finally {
            rl.close();
            await driver.quit();
        }
    })();
}

module.exports = {runRepl};
