const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const blogJsonPath = path.join(rootDir, 'src/assets/database/blog.json');
const outputPath = path.join(rootDir, 'prerender-routes.txt');

function ensureUnique(items) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function main() {
  const blogJson = fs.readFileSync(blogJsonPath, 'utf8');
  const blogEntries = JSON.parse(blogJson);

  const routes = new Set();

  routes.add('/blog');
  routes.add('/category');

  for (const entry of blogEntries) {
    if (entry && entry.Title) {
      routes.add(`/blog/${entry.Title}`);
    }

    const categories = Array.isArray(entry?.Regards)
      ? entry.Regards
      : entry && entry.Regards
        ? [entry.Regards]
        : [];

    for (const categoryValue of categories) {
      const category = String(categoryValue).trim();
      if (category) {
        routes.add(`/category/${category}`);
      }
    }
  }

  const lines = ensureUnique([...routes]).sort();
  fs.writeFileSync(outputPath, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Generated ${lines.length} prerender routes in ${outputPath}`);
  console.log(lines.slice(0, 12));
}

try {
  main();
} catch (error) {
  console.error('Failed to generate prerender routes:', error.message);
  process.exit(1);
}
