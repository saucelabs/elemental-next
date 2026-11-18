import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useGlobalData from '@docusaurus/useGlobalData';
import TipCode from '../components/tipCode';
import ContributeBand from '../components/contributeBand';
import styles from './index.module.css';

const REPO = 'https://github.com/saucelabs/elemental-next';

// Web tools, in the order they show up on the page, with their logo (in static/img/tools). The logos come from each
// project, except for Espresso and XCUITest, which show drawings of their logos (the Android robot over a coffee cup,
// and a green badge with a check mark).
const WEB_TOOLS = [
    {tool: 'Selenium', logo: 'selenium.svg'},
    {tool: 'Selenide', logo: 'selenide.png'},
    {tool: 'Playwright', logo: 'playwright.svg'},
    {tool: 'WebdriverIO', logo: 'webdriverio.svg'},
    {tool: 'Vibium', logo: 'vibium.png'},
];

const MOBILE_TOOLS = [
    {tool: 'Appium', logo: 'appium.png', meta: 'Android and iOS'},
    {tool: 'Mobilewright', logo: 'mobilewright.png', meta: 'Android and iOS'},
    {tool: 'Espresso', logo: 'espresso.svg', meta: 'Android, Kotlin'},
    {tool: 'XCUITest', logo: 'xcuitest.svg', meta: 'iOS, Swift'},
];

// One workflow per row: the CI badge shows the result of its last run on main. A row without a workflow shows as
// coming soon.
const CI_RUNS = [
    {name: 'Selenium · Python', workflow: 'python-tips.yml'},
    {name: 'Selenium · Java', workflow: 'java-tips.yml'},
    {name: 'Selenium · C#', workflow: 'dotnet-tips.yml'},
    {name: 'Selenium · JavaScript', workflow: 'javascript-tips.yml'},
    {name: 'Selenium · Ruby', workflow: 'ruby-tips.yml'},
    {name: 'Selenide · Java', workflow: 'selenide-tips.yml'},
    {name: 'Playwright · TypeScript', workflow: 'playwright-tips.yml'},
    {name: 'Playwright · Python', workflow: 'playwright-python-tips.yml'},
    {name: 'Playwright · C#', workflow: 'playwright-csharp-tips.yml'},
    {name: 'Playwright · Java', workflow: 'playwright-java-tips.yml'},
    {name: 'WebdriverIO · TypeScript', workflow: 'webdriverio-tips.yml'},
    {name: 'Vibium · JavaScript', workflow: 'vibium-tips.yml'},
    {name: 'Vibium · Python', workflow: 'vibium-python-tips.yml'},
    {name: 'Vibium · Java', workflow: 'vibium-java-tips.yml'},
    {name: 'Appium · Java', workflow: 'appium-java-tips.yml'},
    {name: 'Appium · Python', workflow: 'appium-python-tips.yml'},
    {name: 'Appium · JavaScript', workflow: 'appium-tips.yml'},
    {name: 'Mobilewright · TypeScript', workflow: 'mobilewright-tips.yml'},
    {name: 'Espresso · Kotlin', workflow: 'espresso-tips.yml'},
    {name: 'XCUITest · Swift', workflow: 'xcuitest-tips.yml'},
];

// How many rows of the CI panel show at a time, and how often it moves to the next one
const CI_VISIBLE_ROWS = 7;
const CI_STEP_MS = 2500;

// The web tools shown in "One use case, many tools"
const USE_CASE_TOOLS = ['Selenium', 'Selenide', 'Playwright', 'WebdriverIO', 'Vibium'];

const START_HERE = [1, 3, 5, 51, 61];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

// Counts the tips of each tool and collects their languages, from the <DisplayTips> block of each tip.
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

function CiRun({name, workflow, hidden}) {
    const [tool, language] = name.split(' · ');
    return (
        <li aria-hidden={hidden || undefined}>
            <span className={styles.ciName}><b>{tool}</b> · {language}</span>
            {workflow
                ? <a href={`${REPO}/actions/workflows/${workflow}`} target="_blank" rel="noopener noreferrer"
                     tabIndex={hidden ? -1 : undefined}>
                    <img src={`${REPO}/actions/workflows/${workflow}/badge.svg`}
                         alt={hidden ? '' : `Last CI run of the ${name} examples (opens in a new tab)`} height="20"/>
                </a>
                : <span className="es-chip">Coming soon</span>}
        </li>
    );
}

// Shows the CI status of every tool and language, a few rows at a time, moving one row up every few seconds. After the
// last row, it shows the first rows again (copies, hidden from screen readers) and jumps back to the start without
// animation, so the loop looks continuous. It stops while the pointer or the keyboard focus is on it (each one on its
// own, so leaving the page or clicking a badge doesn't restart it under the pointer), and with the "Live" button.
// When the reader asks for less motion, it doesn't move: the list scrolls by hand instead.
function CiRuns() {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const [paused, setPaused] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [focusing, setFocusing] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    const moving = !reducedMotion && !paused && !hovering && !focusing;
    useEffect(() => {
        if (!moving) {
            return undefined;
        }
        const timer = setInterval(() => {
            setAnimate(true);
            setIndex((current) => current + 1);
        }, CI_STEP_MS);
        return () => clearInterval(timer);
    }, [moving]);

    const restartLoop = () => {
        if (index >= CI_RUNS.length) {
            setAnimate(false);
            setIndex(0);
        }
    };
    // Stops and brings a row into view when it gets the keyboard focus (a mouse click on a badge doesn't count)
    const showFocused = (event) => {
        if (!event.target.matches(':focus-visible')) {
            return;
        }
        setFocusing(true);
        const row = [...event.currentTarget.querySelectorAll('li')].indexOf(event.target.closest('li'));
        if (row >= 0 && !reducedMotion) {
            setAnimate(true);
            setIndex(Math.min(row, CI_RUNS.length - CI_VISIBLE_ROWS));
        }
    };
    const releaseFocus = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusing(false);
        }
    };

    return (
        <aside className={styles.ci} aria-labelledby="ci-title">
            <div className={styles.ciHead}>
                <h2 id="ci-title" className="es-mono">Every example runs in CI, every night</h2>
                {reducedMotion
                    ? <span className={clsx('es-mono', styles.ciLive)}><i/>Live</span>
                    : <button type="button" className={clsx('es-mono', styles.ciLive, paused && styles.ciPaused)}
                              aria-pressed={paused} onClick={() => setPaused(!paused)}>
                        <i/>{paused ? 'Paused' : 'Live'}<span className="es-sr-only">: pause the list</span>
                    </button>}
            </div>
            <div className={clsx(styles.ciWindow, reducedMotion && styles.ciScroll)}
                 onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                 onFocus={showFocused} onBlur={releaseFocus}>
                <ul className={styles.ciRows} onTransitionEnd={restartLoop}
                    style={reducedMotion ? undefined : {
                        transform: `translateY(calc(${-index} * var(--ci-row)))`,
                        transition: animate ? undefined : 'none',
                    }}>
                    {CI_RUNS.map((run) => <CiRun key={run.name} {...run}/>)}
                    {!reducedMotion && CI_RUNS.slice(0, CI_VISIBLE_ROWS).map((run) => (
                        <CiRun key={`copy-${run.name}`} {...run} hidden/>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

function Hero() {
    return (
        <header className="es-hero es-on-dark">
            <div className="es-hero__plate">
                <div className={clsx('es-wrap', styles.heroGrid)}>
                    <div>
                        <span className="es-eyebrow">Free and open source</span>
                        <h1 className={styles.heroTitle}>Short, tested tips for web and mobile test automation</h1>
                        <p className={clsx('es-lead', styles.heroLead)}>
                            Each tip shows how to automate one use case, like uploading a file or handling an alert. The
                            code is real, and CI runs every example.
                        </p>
                        <div className="es-hero__ctas">
                            <Link className="es-btn es-btn--pop" to="/tips">Browse the tips</Link>
                            <Link className="es-btn es-btn--ghost-inv" to={`${REPO}/blob/main/CONTRIBUTING.md`}>
                                Write a tip
                            </Link>
                        </div>
                    </div>
                    <CiRuns/>
                </div>
            </div>
        </header>
    );
}

function ToolCard({logo, name, meta, count}) {
    const logoUrl = useBaseUrl(logo.startsWith('/') ? logo : `/img/tools/${logo}`);
    const content = (
        <>
            <span className={styles.toolLogo}><img src={logoUrl} alt="" width="32" height="32"/></span>
            <span>
                <h4 className={styles.toolName}>{name}</h4>
                <span className={styles.toolMeta}>{meta}</span>
            </span>
            <span className={styles.toolCount}>{count ? plural(count, 'tip') : 'Coming soon'}</span>
        </>
    );
    return count
        ? <Link className={styles.tool} to="/tips">{content}</Link>
        : <div className={clsx(styles.tool, styles.toolSoon)}>{content}</div>;
}

function Frameworks({stats}) {
    return (
        <section className="es-block" aria-labelledby="frameworks-title">
            <div className="es-wrap">
                <div className={styles.secHead}>
                    <div>
                        <span className="es-eyebrow">Frameworks</span>
                        <h2 id="frameworks-title">Pick your tool</h2>
                    </div>
                    <p className="es-lead">
                        Selenium is where we started. Selenide, Playwright, WebdriverIO and Vibium are here too, and
                        the mobile tips run on real Android and iOS devices.
                    </p>
                </div>
                <div className={styles.sub}>
                    <h3>Web</h3>
                    <span className="es-mono">Runs in CI on Linux, Windows and macOS</span>
                </div>
                <div className={styles.tools}>
                    {WEB_TOOLS.map(({tool, logo}) => (
                        <ToolCard key={tool} logo={logo} name={tool} count={stats[tool]?.tips.size}
                                  meta={[...(stats[tool]?.languages || [])].join(', ')}/>
                    ))}
                </div>
                <div className={styles.sub}>
                    <h3>Mobile</h3>
                    <span className="es-mono">Runs in CI on real devices in Sauce Labs</span>
                </div>
                <div className={styles.tools}>
                    {MOBILE_TOOLS.map(({tool, logo, meta}) => (
                        <ToolCard key={tool} logo={logo} name={tool} meta={meta} count={stats[tool]?.tips.size}/>
                    ))}
                    <Link className={clsx(styles.tool, styles.toolSuggest)} to={`${REPO}/discussions`}>
                        <span className={styles.toolLogo}>
                            <img src={useBaseUrl('/img/sauce/sauce-mark-pine.svg')} alt="" width="32" height="32"/>
                        </span>
                        <span>
                            <h4 className={styles.toolName}>Missing yours?</h4>
                            <span className={styles.toolMeta}>Tell us in GitHub Discussions</span>
                        </span>
                        <span className={styles.toolCount}>Suggest one</span>
                    </Link>
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
        <section className={clsx('es-block', styles.flush)} aria-labelledby="use-case-title">
            <div className={clsx('es-wrap', styles.show, !picked && styles.picking)}>
                <div>
                    <span className="es-eyebrow">One use case, many tools</span>
                    <h2 id="use-case-title">{tip.title}</h2>
                    <ul className={styles.showList}>
                        <li>Every tip solves one use case. Switch the tool to compare how each framework does it.</li>
                        <li>Same use case, same test site</li>
                        <li>Each example is a full project you can run</li>
                    </ul>
                    <Link className="es-btn es-btn--primary" to={`/tips${tip.slug}`}>Read tip {tip.number}</Link>
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
        <ul className={styles.tipList}>
            {tips.map((tip) => (
                <li key={tip.number}>
                    <Link className={styles.tip} to={`/tips${tip.slug}`}>
                        <span className={styles.tipNumber}>#{tip.number}</span>
                        <span className={styles.tipTitle}>{tip.title}</span>
                        <span className={styles.tipMeta}>{tag(tip)}</span>
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
        <section className={clsx('es-block', styles.flush)} aria-labelledby="tips-title">
            <div className="es-wrap">
                <div className={styles.secHead}>
                    <div>
                        <span className="es-eyebrow">Tips</span>
                        <h2 id="tips-title">Where to begin</h2>
                    </div>
                    <nav className={styles.levels} aria-label="Browse the tips by level">
                        {LEVELS.map((level) => (
                            <Link key={level} className={styles.pill} to={`/tips?level=${level.toLowerCase()}`}>
                                {level}
                            </Link>
                        ))}
                        <Link className="es-btn es-btn--primary es-btn--sm" to="/tips">All {tips.length} tips</Link>
                    </nav>
                </div>
                <div className={styles.lists}>
                    <div className={styles.list}>
                        <h3>Start here</h3>
                        <TipList tips={startHere} tag={tools}/>
                    </div>
                    <div className={styles.list}>
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
        <section className={clsx('es-block', styles.flush)} aria-labelledby="proof-title">
            <div className="es-wrap">
                <div className={styles.secHead}>
                    <div>
                        <span className="es-eyebrow">Why trust the code</span>
                        <h2 id="proof-title">Tested, not just written</h2>
                    </div>
                </div>
                <div className={styles.trust}>
                    <div className={styles.card}>
                        <h3>Runs every night</h3>
                        <p>CI runs the web examples on three operating systems. A broken example fails the build.</p>
                        <div className={styles.os}><span>Ubuntu</span><span>Windows</span><span>macOS</span></div>
                    </div>
                    <div className={styles.card}>
                        <h3>Real devices for mobile</h3>
                        <p>CI runs the mobile examples on real Android and iOS devices in Sauce Labs. You can run them
                            with a free account.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Short and focused</h3>
                        <p>One use case per tip, with a walkthrough of every important line. Read it in five
                            minutes.</p>
                    </div>
                </div>
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
                <ContributeBand/>
            </main>
        </Layout>
    );
}

export default Home;
