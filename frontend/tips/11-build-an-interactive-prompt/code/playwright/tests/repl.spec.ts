import {test, expect} from '@playwright/test';
import {runRepl} from '../repl.ts';

test('evaluates Playwright commands', async ({page}) => {
    const commands = [
        "page.goto('https://the-internet.herokuapp.com')",
        'page.title()',
        "page.locator('#does-not-exist').click({timeout: 1000})",
        'q',
    ];
    const output: unknown[] = [];

    await runRepl(page, async () => commands.shift(), (line) => output.push(line));

    expect(output[1]).toBe('The Internet');
    expect(String(output[2])).toMatch(/^TimeoutError/);
    expect(output[3]).toBe('Quitting...');
});
