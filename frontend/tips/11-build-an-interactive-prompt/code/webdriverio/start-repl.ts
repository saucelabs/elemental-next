import readline from 'readline/promises';
import {remote} from 'webdriverio';
import {runRepl} from './repl.ts';

const browser = await remote({capabilities: {browserName: 'chrome'}, logLevel: 'error'});
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
try {
    await runRepl(browser, (prompt) => rl.question(prompt).catch(() => null), console.log);
} finally {
    rl.close();
    await browser.deleteSession();
}
