# Tip Template

Thanks for your interest in contributing a helpful tip to the Elemental Selenium project!

Together, we can continue to grow this great resource of Selenium tips, tricks, and know-how to help others learn and
grasp Selenium.

Every tip on the site shows code that actually runs: the code lives next to the tip, and CI runs it on Ubuntu,
Windows, and macOS. [Tip 1 (How To Upload a File)](frontend/tips/1-upload-a-file) is a complete example to use as a
reference.

- [Folder and File Structure](#folder-and-file-structure)
- [The Main Page (`main.mdx`)](#the-main-page-mainmdx)
- [The Code (`code/<language>/`)](#the-code-codelanguage)
- [The Language Partials (`_<language>.mdx`)](#the-language-partials-_languagemdx)
- [Checking Your Tip](#checking-your-tip)
- [Markdown Primer](#markdown-primer)

## Folder and File Structure

Create a folder for your tip in `frontend/tips/`, named with the tip number followed by the tip title, in kebab case
(e.g., `1-upload-a-file`). Inside it:

```
frontend/tips/1-upload-a-file/
├── main.mdx          # the page: the problem, the solution, the language tabs, and the authors
├── _python.mdx       # one partial per language, shown in the language tabs
├── _csharp.mdx
├── _java.mdx
├── _javascript.mdx
├── _ruby.mdx
└── code/
    ├── python/       # one runnable project per language
    ├── csharp/
    ├── java/
    ├── javascript/
    └── ruby/
```

We aim to show every tip in Python, C#, Java, JavaScript, and Ruby. If you only know some of these languages, send the
ones you know, and the community can help with the rest.

## The Main Page (`main.mdx`)

This is the only file that becomes a page. Start it with this frontmatter (the `/tips` page uses it to list, filter,
and sort the tips):

```yaml
---
title: 'How To Upload a File'
id: '1-upload-a-file'                 # must match the folder name
slug: /1-upload-a-file
sidebar_label: How To Upload a File
description: 'One or two plain-text sentences (no markdown), shown on the tip card and in search results.'
hide_table_of_contents: true
level: 1                              # 1 = beginner, 2 = intermediate, 3 = advanced
number: 1
publish_date: 2026-10-16
tags:
  - 'file'
  - 'upload'
category:
  - 'fundamentals'                    # fundamentals, troubleshooting, remote, tools, or resources
---
```

Then write the tip with these sections (please keep the section names, so all tips read the same way):

```mdx
# How to Upload a File

## The Problem

{/* 1-3 paragraphs introducing the problem or use case, and what the tip teaches */}

## A Solution

{/* 1-2 paragraphs, a bulleted list, or both */}

## Example

{/* Explain the example in a language-agnostic way, then show the language tabs: */}

import DisplayTips from '@site/src/components/displayTips';

<DisplayTips languages={[
    {label: 'Python', value: 'python'},
    {label: 'C#', value: 'csharp'},
    {label: 'Java', value: 'java'},
    {label: 'JavaScript', value: 'javascript'},
    {label: 'Ruby', value: 'ruby'},
]}/>

## Expected Behavior

{/* A bulleted list of what happens when the example runs */}

## Summary

{/* 3-4 sentences with the key points */}

## Authors

import DefaultAvatar from "@site/src/components/defaultAvatar";

<DefaultAvatar
    name="Your Name"
    imgSrc={"https://github.com/your-github-user.png"}
    description={"Author of this tip"}
    url={"https://github.com/your-github-user"}
    author={true}
/>
```

Each `value` in `DisplayTips` must match a partial (e.g., `value: 'python'` shows `_python.mdx`). If other people
contributed code for the tip, list them in a `## Special Thanks` section before `## Authors`, with the same
`DefaultAvatar` component (without `author={true}`).

## The Code (`code/<language>/`)

Each language gets a small project that CI can run, with a `README.md` that explains how to run it:

| Language   | Project                                                      | How CI runs it            |
|------------|--------------------------------------------------------------|---------------------------|
| Python     | `requirements.txt` + a pytest test file                      | `pytest *.py`             |
| C#         | `csharp.csproj` with MSTest                                  | `dotnet test`             |
| Java       | Maven `pom.xml` with JUnit, tests in `src/test/java/com/elemental/selenium/` | `mvn test` |
| JavaScript | `package.json` with Mocha, tests in `test/`                  | `npm install && npm test` |
| Ruby       | `Gemfile` + a script with RSpec expectations                 | `ruby *.rb`               |

Copy the setup of an existing tip to get started (e.g., `frontend/tips/1-upload-a-file/code/`), and keep the code
simple and readable: it's teaching material. Use [the-internet](https://the-internet.herokuapp.com) as the application
under test when you can, and let Selenium Manager take care of the browser drivers.

## The Language Partials (`_<language>.mdx`)

Each partial embeds the real code with the `TipCode` component (so the page always shows the code CI runs), and then
walks through it:

```mdx
import TipCode from "@site/src/components/tipCode";

## TL;DR - Show Me The Code

<TipCode codePath={"1-upload-a-file/code/python/upload.py"} language={"python"}/>

## Code Walkthrough

### Setup and Teardown

{/* How the browser is started and closed */}

### The Test

{/* What the test does, step by step */}

### Executing the Test

{/* How to install the dependencies and run the test */}
```

`codePath` is relative to `frontend/tips/`, and the file must exist, or the site build fails. If you refer to line
numbers in the walkthrough, keep them in sync with the code.

## Checking Your Tip

- Run each example from its `code/<language>/` directory (see its `README.md`).
- From `frontend/`, run `npm install` and `npm run start` to see the page at http://localhost:3000, and
  `npm run build` to check that the site builds.
- When you open the pull request, CI runs the examples that changed on Ubuntu, Windows, and macOS, and checks the site
  build. Netlify adds a link to a preview of the site.

## Markdown Primer

### How to add Images, Links, Code Snippets:

- **Images** : You can display an image by adding an exclamation point `!` and wrapping the alt text in brackets `[ ]`. Then wrap the link for the image in parentheses `( )`	

- **Links** : You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`

- **Code Snippets** : You don't have to have a code snippet in every tip, but if you DO have code snippets, you can create them by adding a `single backtick` to the beginning and end of your code snippet. For larger code blocks you can add `three backticks` at the beginning and end of your code block.

- **For more on Markdown**, refer to the [markdown guide website](https://www.markdownguide.org/cheat-sheet).

- **For a markdown previewer**, you can use either Visual Studio Code, your editor of choice, or an online markdown previewer, such as [markdown live preview](https://markdownlivepreview.com/).


