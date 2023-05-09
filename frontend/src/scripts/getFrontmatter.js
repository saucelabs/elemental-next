const fs = require('fs');
const path = require('path');
const matter = require('gray-matter')

// Set the target directory for the script to read files from
const targetDir = process.env.DOCS_DIR || 'docs/';

// Function to process the front matter data in a Markdown file
const processMD = (mdFile) => {
    // Parse the front matter data using gray-matter library
    const { data } = matter(fs.readFileSync(mdFile));
    // Process the tags and categories data from the front matter
    const tags = data.tags
        ? data.tags
            .toString()
            .split(",")
            .map((tag) =>
                tag.trim().replace(/['"]/g, "").replace(/-/g, " ")
            )
        : [];
    const categories = data.category
        ? data.category
            .toString()
            .split(",")
            .map((cat) =>
                cat.trim().replace(/['"]/g, "").replace(/-/g, " ")
            )
        : [];

    // Create an object containing the processed front matter data

    // title: '1: How To Upload A File'
    // id: '1-upload-a-file-ruby'
    // contentUrl: "docs/how-to-upload-a-file/1-upload-a-file-ruby"
    // sidebar_label: Ruby
    // text: "Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window AutoIt."
    // number: 1
    // publish_date: 2019-08-09
    // last_update:
    // date: 2023-02-27
    // tags:
    // - 'file'
    // - 'upload'
    // - 'file upload'
    // level: 1
    // category:
    // - 'remote'
    // - 'fundamentals'
    // language: ruby

    const processedData = {
        title: data.title,
        id: data.id ? data.id.replace(/"/g, "") : "",
        // slug: data.slug,
        number: data.number,
        publish_date: data.publish_date,
        last_update: data.last_update || "",
        date: data.date,
        tags: tags,
        level: data.level,
        category: categories,
        language: data.language,
        contentUrl: data.contentUrl,
        text: data.text
    };

    return processedData;
};

// Function to recursively get front matter data from all Markdown files in a directory
const getFrontmatter = (dir) => {
    // Get an array of all files and directories in the given directory
    const files = fs.readdirSync(dir);
    // Reduce the array of files and directories to an array of processed front matter data objects
    return files.reduce((acc, file) => {
        // Get the full file path and extension
        const filePath = path.join(dir, file);
        const ext = path.extname(file);
        // If the file is a directory, recursively call this function on the directory
        if (fs.statSync(filePath).isDirectory()) {
            const nestedFiles = getFrontmatter(filePath);
            acc.push(...nestedFiles);
            // If the file is a Markdown file, process its front matter data and add it to the output array
        } else if (ext === ".md" || ext === ".mdx") {
            const processedData = processMD(filePath);
            // Check if the processed front matter data has both a title and an id
            if (processedData.title && processedData.id && processedData.language == 'ruby') {
                acc.push(processedData);
                // If the processed front matter data is missing a title or an id, log a message and skip it
            } else {
                console.log(`Skipping ${filePath} because it doesn't have title and/or id frontmatter`);
            }
        }
        return acc;
    }, []);
};

// Call the getFrontmatter function to get an array of all processed front matter data objects
let allData = getFrontmatter(targetDir);
let sortedData = allData.sort((a, b) => Number(a.number) - Number(b.number));

// Write the processed front matter data to a JavaScript file for use in the website
fs.writeFile(path.join(__dirname, "data.js"), `const Data = ${JSON.stringify(sortedData, null, 2)};\n\nexport default Data;\n`, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    // If the script is not running in test mode, log a message indicating that the frontmatter was written to data.js
    if (process.env.NODE_ENV !== 'test') {
        console.log(`Frontmatter data written to data.js`);
    }
});

module.exports = { getFrontmatter };