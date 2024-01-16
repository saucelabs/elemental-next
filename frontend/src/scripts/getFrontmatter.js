const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/* Set the target directory for the script to read files from */
const targetDir = process.env.DOCS_DIR || 'docs/';

/* Creates processedData object that contains the front matter data properties */
const processMD = (mdFile) => {
  const { data } = matter(fs.readFileSync(mdFile));

  /* Process the tags and categories data from the front matter */
  const tags =
    data.tags && data.tags.length
      ? data.tags
          .toString()
          .split(',')
          .map((tag) => tag.trim().replace(/['"]/g, '').replace(/-/g, ' '))
      : [];

  const categories =
    data.category && data.category.length
      ? data.category
          .toString()
          .split(',')
          .map((cat) => cat.trim().replace(/['"]/g, '').replace(/-/g, ' '))
      : [];

  /*
Returns object containing the processed front matter data based on
/docs/template/main.mdx

  title: 'Template'
  id: 'template'
  contentUrl: '/docs/template/template'
  sidebar_label: template
  text: 'This is a template.'
  number: 0
  hide_table_of_contents: true
  level: #add level 1, 2 or 3
  publish_date: 2023-05-26 #add date
  last_update:
    date: 2023-05-26
  tags:
    - 'template'
  category: 'template'
*/
  if (data.title !== 'Template') {
    const processedData = {
      title: data.title,
      id: data.id ? data.id.replace(/"/g, '') : '',
      // slug: data.slug,
      number: data.number,
      publish_date: data.publish_date,
      last_update: data.last_update || '',
      date: data.date,
      tags: tags,
      level: data.level,
      category: categories,
      language: data.language,
      contentUrl: data.contentUrl,
      text: data.text,
    };
    return processedData;
  }
  return undefined;
};

/*
Recursively get front matter data from all Markdown files in a directory
Checks if the file extension is .md or .mdx and if the file name is "main.mdx"
*/

const getFrontmatter = (dir) => {
  const files = fs.readdirSync(dir);
  return files.reduce((acc, file) => {
    const filePath = path.join(dir, file);
    const ext = path.extname(file);
    if (fs.statSync(filePath).isDirectory()) {
      const nestedFiles = getFrontmatter(filePath);
      acc.push(...nestedFiles);
    } else if ((ext === '.md' || ext === '.mdx') && file === 'main.mdx') {
      const processedData = processMD(filePath);
      if (processedData && processedData.title && processedData.id) {
        acc.push(processedData);
      } else {
        console.log(`Skipping ${filePath} because it doesn't have title and/or id frontmatter`);
      }
    }
    return acc;
  }, []);
};

/* Call the getFrontmatter function to get an array of all processed front matter  */
let allData = getFrontmatter(targetDir);
let sortedData = allData.sort((a, b) => Number(a.number) - Number(b.number));

/* Write the processed in scripts/data.js which is used by the tips page */
fs.writeFile(
  path.join(__dirname, 'data.js'),
  `const Data = ${JSON.stringify(sortedData, null, 2)};\n\nexport default Data;\n`,
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    // If the script is not running in test mode, log a message indicating that the frontmatter was written to data.js
    if (process.env.NODE_ENV !== 'test') {
      console.log(`Frontmatter data written to data.js`);
    }
  }
);

module.exports = { getFrontmatter };
