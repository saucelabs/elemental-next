import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useGlobalData from '@docusaurus/useGlobalData';
import TipCode from '../components/tipCode';
import styles from './index.module.css';

const REPO = 'https://github.com/saucelabs/elemental-next';

// Web tools, in the order they show up on the page, with the short name of their icon
const WEB_TOOLS = [
    {tool: 'Selenium', icon: 'Se', with: ['Selenide']},
    {tool: 'Playwright', icon: 'Pw'},
    {tool: 'WebdriverIO', icon: 'Wd'},
    {tool: 'Vibium', icon: 'Vb'},
];

const MOBILE_TOOLS = [
    {tool: 'Appium', icon: 'Ap', meta: 'Android and iOS'},
    {tool: 'Mobilewright', icon: 'Mw', meta: 'Android and iOS'},
    {tool: 'Espresso', icon: 'Es', meta: 'Android, Kotlin'},
    {tool: 'XCUITest', icon: 'Xc', meta: 'iOS, Swift'},
];

// One workflow per row: the CI badge shows the result of its last run on main
const CI_RUNS = [
    {name: 'Selenium · Python', workflow: 'python-tips.yml'},
    {name: 'Selenium · Java', workflow: 'java-tips.yml'},
    {name: 'Playwright · TypeScript', workflow: 'playwright-tips.yml'},
    {name: 'WebdriverIO · TypeScript', workflow: 'webdriverio-tips.yml'},
    {name: 'Vibium · JavaScript', workflow: 'vibium-tips.yml'},
];

// The web tools shown in "One use case, many tools"
const USE_CASE_TOOLS = ['Selenium', 'Playwright', 'WebdriverIO', 'Vibium'];

const START_HERE = [1, 3, 5, 51, 61];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

// Counts the tips of each tool and collects their languages, from the <DisplayTips> block of each tip
function toolStats(tips) {
    const stats = {};
    tips.forEach((tip) => {
        (tip.languages || []).forEach(({tool, label}) => {
            stats[tool] = stats[tool] || {tips: new Set(), languages: new Set()};
            stats[tool].tips.add(tip.number);
            stats[tool].languages.add(label);
        });
    });
    return stats;
}

function plural(count, word) {
    return `${count} ${word}${count === 1 ? '' : 's'}`;
}

function Hero() {
    return (
        <header className={styles.hero}>
            <div className={clsx('container', styles.heroGrid)}>
                <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>Free and open source</span>
                    <h1 className={styles.heroTitle}>
                        Short, <em>tested</em> tips for web and mobile test automation
                    </h1>
                    <p className={styles.lede}>
                        Each tip shows how to automate one use case, like uploading a file or handling an alert. The
                        code is real, and CI runs every example.
                    </p>
                    <div className={styles.ctas}>
                        <Link className="button button--primary button--lg" to="/tips">Browse the tips →</Link>
                        <Link className="button button--outline button--primary button--lg"
                              to={`${REPO}/blob/main/CONTRIBUTING.md`}>Write a tip</Link>
                    </div>
                </div>
                <div className={styles.run}>
                    <h2 className={styles.runTitle}>Every example runs in CI, every night</h2>
                    <ul className={styles.runRows}>
                        {CI_RUNS.map(({name, workflow}) => (
                            <li key={workflow}>
                                <span>{name}</span>
                                <a href={`${REPO}/actions/workflows/${workflow}`}>
                                    <img src={`${REPO}/actions/workflows/${workflow}/badge.svg`}
                                         alt={`Last CI run of the ${name} examples`} height="20"/>
                                </a>
                            </li>
                        ))}
                        <li>
                            <span>Appium · Sauce Labs</span>
                            <span className={styles.pending}>coming soon</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

function ToolCard({icon, name, meta, count, sauce}) {
    const content = (
        <>
            <span className={styles.toolIcon} aria-hidden="true">{icon}</span>
            <span className={styles.toolText}>
                <span className={styles.toolName}>{name}</span>
                <span className={styles.toolMeta}>
                    {meta}
                    {sauce && <span className={clsx(styles.pill, styles.sauce)}>Sauce Labs</span>}
                </span>
            </span>
            <span className={clsx(styles.pill, count && styles.count)}>
                {count ? plural(count, 'tip') : 'Coming soon'}
            </span>
        </>
    );
    return count
        ? <Link className={clsx(styles.tool, styles.live)} to="/tips">{content}</Link>
        : <div className={styles.tool}>{content}</div>;
}

function Frameworks({stats}) {
    return (
        <section className={styles.band}>
            <div className="container">
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Frameworks</span>
                    <h2>Pick your tool</h2>
                    <p className={styles.lede}>
                        Selenium is where we started. Playwright, WebdriverIO and Vibium are here too, and mobile
                        frameworks are on the way.
                    </p>
                </div>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3>Web <small>runs in CI on Linux, Windows and macOS</small></h3>
                        {WEB_TOOLS.map(({tool, icon, with: extra = []}) => {
                            const tips = new Set();
                            const languages = new Set();
                            [tool, ...extra].forEach((name) => {
                                stats[name]?.tips.forEach((number) => tips.add(number));
                                stats[name]?.languages.forEach((label) => languages.add(name === tool ? label : name));
                            });
                            return <ToolCard key={tool} icon={icon} name={tool} count={tips.size}
                                             meta={[...languages].join(', ')}/>;
                        })}
                    </div>
                    <div className={styles.column}>
                        <h3>Mobile <small>will run on real devices in Sauce Labs</small></h3>
                        {MOBILE_TOOLS.map(({tool, icon, meta}) => (
                            <ToolCard key={tool} icon={icon} name={tool} meta={meta} sauce/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// The languages of a tool in a tip that have a code file to show, e.g. [{label: 'Python', codePath, language}]
function toolExamples(tip, tool) {
    return (tip.languages || [])
        .filter((entry) => entry.tool === tool && tip.examples?.[entry.value])
        .map(({label, value}) => ({label, ...tip.examples[value]}));
}

// Shows one tip with the code of each web tool, in all its languages. The browser picks a random tip from the ones
// that have code for all the tools, so each visit can show a different use case. The page is built with the first
// one, hidden until the browser picks, so the title doesn't change in front of the reader.
function UseCase({tips}) {
    const candidates = tips
        .filter((tip) => USE_CASE_TOOLS.every((tool) => toolExamples(tip, tool).length > 0))
        .sort((a, b) => a.number - b.number);
    const [tip, setTip] = useState(candidates[0]);
    const [picked, setPicked] = useState(false);
    useEffect(() => {
        setTip(candidates[Math.floor(Math.random() * candidates.length)]);
        setPicked(true);
    }, []);
    if (!tip) {
        return null;
    }
    return (
        <section>
            <div className={clsx('container', styles.useCase, !picked && styles.picking)}>
                <div className={styles.useCaseCopy}>
                    <span className={styles.eyebrow}>One use case, many tools</span>
                    <h2>{tip.title}</h2>
                    <p className={styles.lede}>
                        Every tip solves one use case. Switch the tool to compare how each framework does it.
                    </p>
                    <ul className={styles.checks}>
                        <li>Same use case, same test site</li>
                        <li>Each example is a full project you can run</li>
                        <li>Pick your language inside each tool</li>
                    </ul>
                    <Link className="button button--outline button--primary" to={`/tips${tip.slug}`}>
                        Read tip {tip.number} →
                    </Link>
                </div>
                <div className={styles.code}>
                    <Tabs key={tip.number}>
                        {USE_CASE_TOOLS.map((tool) => (
                            <TabItem key={tool} value={tool} label={tool}>
                                <Tabs groupId="use-case-language">
                                    {toolExamples(tip, tool).map(({label, codePath, language}) => (
                                        <TabItem key={label} value={label} label={label}>
                                            <TipCode codePath={codePath} language={language}/>
                                        </TabItem>
                                    ))}
                                </Tabs>
                            </TabItem>
                        ))}
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

function TipList({tips, tag}) {
    return (
        <ul className={styles.tips}>
            {tips.map((tip) => (
                <li key={tip.number}>
                    <Link to={`/tips${tip.slug}`}>
                        <span className={styles.number}>#{tip.number}</span>
                        <span className={styles.tipTitle}>{tip.title}</span>
                        <span className={styles.tag}>{tag(tip)}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

function Tips({tips}) {
    const byNumber = Object.fromEntries(tips.map((tip) => [tip.number, tip]));
    const startHere = START_HERE.map((number) => byNumber[number]).filter(Boolean);
    const recent = [...tips]
        .filter((tip) => tip.lastUpdatedAt)
        .sort((a, b) => b.lastUpdatedAt - a.lastUpdatedAt)
        .slice(0, 5);
    const tools = (tip) => plural(new Set((tip.languages || []).map(({tool}) => tool)).size, 'tool');
    return (
        <section className={styles.band}>
            <div className="container">
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Tips</span>
                    <h2>Where to begin</h2>
                </div>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3>Start here</h3>
                        <TipList tips={startHere} tag={tools}/>
                        <nav className={styles.levels} aria-label="Browse the tips by level">
                            {LEVELS.map((level) => (
                                <Link key={level} to={`/tips?level=${level.toLowerCase()}`}>{level}</Link>
                            ))}
                            <Link to="/tips">All {tips.length} tips</Link>
                        </nav>
                    </div>
                    <div className={styles.column}>
                        <h3>Recently updated</h3>
                        <TipList tips={recent} tag={tools}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Proof() {
    return (
        <section>
            <div className="container">
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Why trust the code</span>
                    <h2>Tested, not just written</h2>
                </div>
                <div className={styles.proof}>
                    <div>
                        <h3>Runs every night</h3>
                        <p>CI runs the web examples on three operating systems. A broken example fails the build.</p>
                        <div className={styles.os}><span>ubuntu</span><span>windows</span><span>macos</span></div>
                    </div>
                    <div>
                        <h3>Real devices for mobile</h3>
                        <p>Mobile tips need devices and emulators, so they will run in Sauce Labs. You can run them
                            with a free account.</p>
                    </div>
                    <div>
                        <h3>Short and focused</h3>
                        <p>One use case per tip, with a walkthrough of every important line. Read it in five
                            minutes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contribute() {
    return (
        <section className={styles.contribute}>
            <div className={clsx('container', styles.contributeRow)}>
                <div>
                    <h2>Know a better way?</h2>
                    <p>Write a tip, add your language or framework to an existing one, or fix an example. We review
                        every pull request.</p>
                </div>
                <Link className={clsx('button button--lg', styles.contributeButton)}
                      to={`${REPO}/blob/main/CONTRIBUTING.md`}>Read the contributing guide →</Link>
            </div>
        </section>
    );
}

function Home() {
    const tips = useGlobalData().metadata.default.aggregateFrontMatter;
    return (
        <Layout
            title="Home"
            description="Short, tested tips for web and mobile test automation">
            <Hero/>
            <main>
                <Frameworks stats={toolStats(tips)}/>
                <UseCase tips={tips}/>
                <Tips tips={tips}/>
                <Proof/>
                <Contribute/>
            </main>
        </Layout>
    );
}

export default Home;
