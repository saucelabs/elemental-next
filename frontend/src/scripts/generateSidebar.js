const fs = require('fs');
const path = require('path');
const grayMatter = require('gray-matter');

/*
 * Generates the sidebar.js file based on main.mdx files in folders in the docs directory
 */
function generateSidebar() {
  const docsDir = path.resolve(__dirname, '../../docs');

  const sidebar = {
    docs: [
      {
        type: 'category',
        label: 'Tips',
        collapsed: true,
        items: [],
      },
    ],
  };

  /*
   * Reads files in the specified directory path, passed as an argument, recursively
   */
  function readFiles(dir) {
    /* reads dir and returns an array of file names. */
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file); // constructs the full path to the current file by joining the directory path and the file name
      const stats = fs.statSync(filePath); // retrieves the file statistics, including whether it is a directory or a file

      if (stats.isDirectory()) {
        readFiles(filePath);
        /* if file named main.mdx, it read its content and extract the frontmatter. */
      } else if (file === 'main.mdx') {
        const fileContent = fs.readFileSync(filePath, 'utf-8'); // reads the content of the main.mdx file as a string

        /* gray-matter lib extracts the frontmatter and stores content in a data variable. */
        const { data } = grayMatter(fileContent);

        /*  If frontmatter has id, it should be included in the sidebar */
        if (data.id) {
          const contentUrl = data.contentUrl.replace('docs/', '');
          sidebar.docs[0].items.push({
            type: 'doc',
            label: data.title,
            id: `${contentUrl}`,
          });
        }
      }
    });
  }

  readFiles(docsDir);

  /* writes the generated sidebar object to the sidebars.js */
  fs.writeFileSync(
    path.resolve(__dirname, '../../sidebars.js'),
    `module.exports = ${JSON.stringify(sidebar, null, 2)};`
  );
}

/*
* should generate this:

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Tips',
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'How To Upload A File',
          id: 'how-to-upload-a-file/1-upload-a-file',
        },
      ],
    },
  ],
};

*/

generateSidebar();
