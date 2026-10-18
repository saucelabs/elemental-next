import {browser, expect} from '@wdio/globals';
import {runRepl} from '../repl.ts';

describe('Interactive Prompt', () => {
    it('evaluates WebdriverIO commands', async () => {
        const commands = [
            "browser.url('https://the-internet.herokuapp.com')",
            'browser.getTitle()',
            "browser.$('#does-not-exist').click()",
            'q',
        ];
        const output: unknown[] = [];

        await runRepl(browser, async () => commands.shift(), (line) => output.push(line));

        expect(output[1]).toBe('The Internet');
        expect(String(output[2])).toMatch(/^Error: .*does-not-exist/);
        expect(output[3]).toBe('Quitting...');
    });
});
