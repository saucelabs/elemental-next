# Tip Template Intro

Thanks for your interest in contributing a helpful tip to the Elemental Selenium project!

Together, we can continue to grow this great resource of Selenium tips, tricks, and know-how to help others learn and grasp Selenium.

First, here are some links to navigate this page:
- [Tip Template Intro](#tip-template-intro)
- [Folder and File Structure](#folder-and-file-structure)
- [How to Use Template](#how-to-use-template)
- [Content Template](#content-template)
- [Markdown Primer](#markdown-primer)

Ready to submit your tip? Here we go!

## Folder and File Structure

-  Create a new folder for your tip in the tips folder, if it does not already exist. The title should be the tip number, followed by tip title, all in kebab case (e.g. `1-how-to-upload-a-file`).

- Add your language-specific markdown file in the appropriate folder, and title the file the language you are submitting (e.g. `java.md`). See tip template below for how to format your markdown file.

-  When creating a new folder and adding markdown files, use the following tree structure :

```
Project Tree
.
└── elemental-next/
    └── frontend/
        └── docs/
            └── updated-tips/
                ├── 1-how-to-upload-a-file/
                │   ├── csharp.md
                │   ├── java.md
                │   ├── javascript.md
                │   ├── python.md
                │   └── ruby.md
                └── 2-download-a-file/
                    ├── csharp.md
                    ├── java.md
                    ├── javascript.md
                    ├── python.md
                    └── ruby.md
```

## How to Use Template

- Copy the [content template](#content-template) below into your editor of choice.
- Add your tip information using `markdown` language. We have a [markdown primer](#markdown-primer) below to help you with any formatting issues.
-  Other than the `Page Title` header, please do not change the header names, as we use a structured and coherent format to fetch data.
-  You may _slightly alter_ the `Example(s)` header, to reflect how many examples you have (e.g. `Example` if there is only one, or `Example 1`, `Example 2` if there are multiple examples).
-  Edit the metadata to reflect which coding language your tip will be presented in. In the template below, the metadata is reflecting `Ruby` language.


## Content Template

```

---
title: 'Ruby'
id: '0-template-ruby'
contentUrl: "docs/template-ruby/0-template-ruby"
sidebar_label: Ruby
text: "This is a template."
number: 0
publish_date: 2023-02-17
last_update:
  date: 2023-02-24
tags:
  - 'template'
level: 0
category: 'template'
language: ruby
---

# Page Title

<!-- Create a page title that best explains your tip -->

## Intro

<!-- Write 1-3 paragraphs introducing a problem or use case, and what your tip will be teaching the reader -->

## A Solution

<!-- Write your solution which can be 1-2 paragraphs, a bulleted list or a combination of both -->

## Example

<!-- Show your example solution in any of the following : paragraphs, a bulleted list, ordered and unordered lists and include images, code snippets. If more than one example, please indicate, e.g. Example 1, Example 2. -->

## Expected Behavior

<!-- Write your expected behavior of the solutions provided as 1-2 paragraphs, a bulleted list or a combination of both -->

## Summary

<!-- Write a summary of the key points listed above and conclude the tip. This should be 3-4 sentences. -->

## About The Author

<!-- Write a short bio, 2-3 sentences and include any links to contact you (LinkedIn, Twitter, website, etc) -->


```

## Markdown Primer

### How to add Images, Links, Code Snippets:

- **Images** : You can display an image by adding an exclamation point `!` and wrapping the alt text in brackets `[ ]`. Then wrap the link for the image in parentheses `( )`	

- **Links** : You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`

- **Code Snippets** : You don't have to have a code snippet in every tip, but if you DO have code snippets, you can create them by adding a `single backtick` to the beginning and end of your code snippet. For larger code blocks you can add `three backticks` at the beginning and end of your code block.

- **For more on Markdown**, refer to the [markdown guide website](https://www.markdownguide.org/cheat-sheet).

- **For a markdown previewer**, you can use either Visual Studio Code, your editor of choice, or an online markdown previewer, such as [markdown live preview](https://markdownlivepreview.com/).


