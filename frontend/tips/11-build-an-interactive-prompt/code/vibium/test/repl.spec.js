const assert = require('assert');
const {browser} = require('vibium');
const {runRepl} = require('../repl');

describe('Interactive Prompt', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('evaluates Vibium commands', async function () {
        const commands = [
            "page.go('https://the-internet.herokuapp.com')",
            'page.title()',
            "page.find('#does-not-exist', {timeout: 1000})",
            'q',
        ];
        const output = [];

        await runRepl(page, async () => commands.shift(), (line) => output.push(line));

        assert.strictEqual(output[0], 'The Internet');
        assert(output[1].includes('#does-not-exist'));
        assert.strictEqual(output[2], 'Quitting...');
    });
});
