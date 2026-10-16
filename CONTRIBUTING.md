# 👉 Contributing to Elemental Selenium

Thank you for your interest in Elemental Selenium! Your contributions are highly welcome and encouraged, as this is a community project.

## Ways to Contribute 🤝:

- [Add a new tip 📝](#-add-a-new-tip)
- [Improve the site, the content, or the design 🎨](#-improve-the-site-the-content-or-the-design)
- [Report a bug 🐛](#-report-a-bug)
- [Suggest a feature 💡](#-suggest-a-feature)
- [Contributing code 👩🏽‍💻](#-contributing-code)
  - [Run the site locally 🖥️](#run-the-site-locally-%EF%B8%8F)
  - [Commit messages ✍️](#commit-messages-%EF%B8%8F)
  - [Sign your work / Developer certificate of origin 🖊️](#sign-your-work--developer-certificate-of-origin-%EF%B8%8F)

Below are a few guidelines we would like you to follow. If you need help, please reach out to us by opening an issue.

## 📝 Add a new tip

Adding a new tip tutorial is the best way to have our community engage and share knowledge with each other. Every tip
shows code that actually runs: the code lives next to the tip, in `frontend/tips/<tip>/code/<language>/`, and CI runs
it on Ubuntu, Windows, and macOS. We aim to show every tip in Python, C#, Java, JavaScript, and Ruby, but you're
welcome to send the languages you know.

The [tip template](TIP-TEMPLATE.MD) walks you through the structure of a tip, step by step. [AGENTS.md](AGENTS.md)
has more details about the repository and the CI.

You can also improve an existing tip: add a language that is missing, make an example simpler, or update it to the
latest Selenium version.

## 🎨 Improve the site, the content, or the design

Not all contributions are code. These are just as welcome:

- **Content**: fix typos, broken links, or outdated explanations in the tips and pages (`frontend/tips/`,
  `frontend/src/pages/`).
- **Design**: improve the layout, the theme (`frontend/src/css/custom.css`), the images, or how the site looks on
  mobile. Open an issue with the `design` label to share mockups or ideas before sending a pull request.
- **Accessibility**: color contrast, keyboard navigation, alt text, and screen reader support. Check the
  [open issues](../../issues) for known problems.

## 🐛 Report a bug

Reporting bugs is a great way to contribute and help improve the project, and fix any errors that might affect functionality and usability. Before creating a bug report, please check that an [Issue](../../issues) reporting the same problem does not already exist. If there is such an issue, you may add your information as a comment to the existing issue.

To report a new bug you should open an issue that summarizes the bug and set the label to "bug".

If you want to provide a fix along with your bug report, that's great! In this case please send us a pull request as described in section [Contributing code](#-contributing-code).

## 💡 Suggest a feature

To request a new feature you should open an [issue](../../issues/new) and summarize the desired functionality and its use case. Set the issue label to "enhancement".

## 👩🏽‍💻 Contributing code

This is an outline of what the workflow for code contributions looks like.

- Check the list of open [issues](../../issues). Either assign an existing issue to yourself, or
create a new one that you would like to work on, and discuss your ideas and use cases.

It is always best to discuss your plans beforehand, to ensure that your contribution is in line with our goals.

- Fork the repository on GitHub
- Create a topic branch from where you want to base your work. It's best to name the branch something related to the work you are doing (e.g. `fixing-footer`).
- Make commits of logical units.
- Make sure you sign-off on your commits `git commit -s -m "fix(site): adding X to change Y"`
- Write good commit messages (see below).
- Push your changes to a topic branch in your fork of the repository.
- Open a pull request and fill in the template. If it is not ready yet, open it as a
  [draft](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests).
- CI builds the site, runs the code examples you changed, and Netlify posts a deploy preview link, so you can check
  your changes on the site.
- Project maintainers might comment on your work as you progress.
- When you are done, mark the pull request as ready for review. It needs the approval of a maintainer to be merged.

Thanks for your contributions!

### Run the site locally 🖥️

The site is built with [Docusaurus](https://docusaurus.io/) and needs Node.js 24.

```
cd frontend
npm install
npm run start   # dev server at http://localhost:3000
npm run build   # production build, fails on broken links or MDX errors
```

To run a code example, follow the README.md in its `code/<language>/` directory.

### Commit messages ✍️

We use [Conventional Commits](https://www.conventionalcommits.org/), e.g. `feat(tips): add a JavaScript example for tip 7`,
`fix(site): ...`, or `docs: ...`. Your commit messages ideally can answer two questions: what changed and why. The subject line should feature the "what" and the body of the commit should describe the "why".

When creating a pull request, its description should reference the corresponding issue id.

### Sign your work / Developer certificate of origin 🖊️

All contributions (including pull requests) must agree to the Developer Certificate of Origin (DCO) version 1.1. This is exactly the same one created and used by the Linux kernel developers and posted on http://developercertificate.org/. This is a developer's certification that they have the right to submit the patch for inclusion into the project. Simply submitting a contribution implies this agreement, however, please include a "Signed-off-by" tag in every patch (this tag is a conventional way to confirm that you agree to the DCO) - you can automate this with a [Git hook](https://stackoverflow.com/questions/15015894/git-add-signed-off-by-line-using-format-signoff-not-working)

```
git commit -s -m "fix(site): adding X to change Y"
```

**Have fun, and happy hacking!** 🔥
