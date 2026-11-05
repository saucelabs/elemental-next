// Creates the social cards: the image shown in the link preview when a page is shared.
// Usage: npm run cards [-- <tip folder>...], e.g. npm run cards -- 1-upload-a-file
// With no tip folders, it creates the card of every tip and the default card of the site (static/img/social-card.png).
// Each tip card goes to static/img/cards/<tip folder>.png, and the `image` field of the tip's main.mdx points to it.
// The card shows the tip number, the title (with the words in the `card_highlight` field in green) and the tools of
// the <DisplayTips> block. The template is scripts/social-card.html.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {Builder} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tipsDir = path.join(root, 'tips');
const cardsDir = path.join(root, 'static/img/cards');
const template = fs.readFileSync(path.join(root, 'scripts/social-card.html'), 'utf8')
    .replaceAll('{{root}}', pathToFileURL(root).href);
const width = 1200;
const height = 675;

// The tool of a <DisplayTips> entry, as the tip page shows it (see KNOWN_TOOLS in src/components/displayTips.js).
const knownTools = {selenide: 'Selenide'};
const webTools = ['Selenium', 'Selenide', 'Playwright', 'WebdriverIO', 'Vibium'];

const escapeHtml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// A frontmatter field of a main.mdx, without quotes. Undefined when the field is not there.
function field(frontmatter, name) {
    const match = frontmatter.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'));
    return match ? match[1].trim().replace(/^(['"])(.*)\1$/, '$2') : undefined;
}

// The title as HTML, with the first match of `highlight` (ignoring case) wrapped in <em>.
function titleHtml(title, highlight, folder) {
    if (!highlight) {
        return escapeHtml(title);
    }
    const start = title.toLowerCase().indexOf(highlight.toLowerCase());
    if (start < 0) {
        throw new Error(`${folder}: card_highlight '${highlight}' is not in the title '${title}'`);
    }
    const end = start + highlight.length;
    return `${escapeHtml(title.slice(0, start))}<em>${escapeHtml(title.slice(start, end))}</em>${escapeHtml(title.slice(end))}`;
}

// The tools of the <DisplayTips> block, in the order of the tabs.
function tools(content) {
    const block = content.match(/<DisplayTips languages=\{\[([\s\S]*?)\]\}/);
    if (!block) {
        return [];
    }
    const entries = [...block[1].matchAll(/\{label: '[^']*', value: '([^']*)'(?:, tool: '([^']*)')?\}/g)];
    return [...new Set(entries.map(([, value, tool]) => tool || knownTools[value] || 'Selenium'))];
}

// Sets the `image` field of a main.mdx to the card. Adds it before `tags` when it is not there.
function setImage(file, content, image) {
    const line = `image: "${image}"`;
    const updated = /^image:.*$/m.test(content)
        ? content.replace(/^image:.*$/m, line)
        : content.replace(/^tags:/m, `${line}\ntags:`);
    if (updated !== content) {
        fs.writeFileSync(file, updated);
    }
}

function tipCard(folder) {
    const file = path.join(tipsDir, folder, 'main.mdx');
    const content = fs.readFileSync(file, 'utf8');
    const frontmatter = content.match(/^---\n([\s\S]*?)\n---/)[1];
    setImage(file, content, `img/cards/${folder}.png`);
    return {
        output: path.join(cardsDir, `${folder}.png`),
        label: `Tip ${field(frontmatter, 'number')}`,
        title: titleHtml(field(frontmatter, 'title'), field(frontmatter, 'card_highlight'), folder),
        tools: tools(content),
    };
}

const defaultCard = {
    output: path.join(root, 'static/img/social-card.png'),
    label: 'elementalselenium.com',
    title: 'Short, <em>tested</em> tips for web and mobile test automation',
    tools: webTools,
};

const folders = process.argv.length > 2
    ? process.argv.slice(2)
    : fs.readdirSync(tipsDir).filter((folder) => fs.existsSync(path.join(tipsDir, folder, 'main.mdx')));
const cards = folders.map(tipCard);
if (process.argv.length <= 2) {
    cards.push(defaultCard);
}

const page = path.join(root, 'scripts/.social-card.tmp.html');
const options = new chrome.Options().addArguments('--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1');
const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
try {
    // The window includes the browser frame, so grow it until the page has the size of the card.
    await driver.manage().window().setRect({width, height});
    const inner = await driver.executeScript('return [window.innerWidth, window.innerHeight]');
    await driver.manage().window().setRect({width: 2 * width - inner[0], height: 2 * height - inner[1]});

    fs.mkdirSync(cardsDir, {recursive: true});
    for (const card of cards) {
        fs.writeFileSync(page, template
            .replace('{{label}}', escapeHtml(card.label))
            .replace('{{title}}', card.title)
            .replace('{{tools}}', card.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join('')));
        await driver.get(pathToFileURL(page).href);
        await driver.executeScript('return document.fonts.ready');
        fs.writeFileSync(card.output, await driver.takeScreenshot(), 'base64');
        console.log(`Created ${path.relative(root, card.output)}`);
    }
} finally {
    await driver.quit();
    fs.rmSync(page, {force: true});
}
