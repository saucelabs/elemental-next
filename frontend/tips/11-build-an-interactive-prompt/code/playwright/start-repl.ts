import readline from 'readline/promises';
import {chromium} from '@playwright/test';
import {runRepl} from './repl.ts';

const browser = await chromium.launch({headless: false});
const page = await browser.newPage();
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
try {
    await runRepl(page, (prompt) => rl.question(prompt).catch(() => null), console.log);
} finally {
    rl.close();
    await browser.close();
}
