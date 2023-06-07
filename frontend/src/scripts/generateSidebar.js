const fs = require('fs');
const path = require('path');
const grayMatter = require('gray-matter');

function generateSidebar() {
  const docsDir = path.resolve(__dirname, '../../docs');

  const sidebar = {
    docs: [
      {
        items: [],
      },
    ],
  };

  function readFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        readFiles(filePath);
      } else if (file === 'main.mdx') {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = grayMatter(fileContent);

        sidebar.docs[0].items.push({
          type: 'doc',
          label: data.title,
          id: data.id,
        });
      }
    });
  }

  readFiles(docsDir);

  fs.writeFileSync(
    path.resolve(__dirname, '../../sidebars.js'),
    `module.exports = ${JSON.stringify(sidebar, null, 2)};`
  );
}

generateSidebar();
