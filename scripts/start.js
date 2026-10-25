#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');

const SKIP_FLAGS = ['--skip-blog-html', '--no-blog-html'];

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: true });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function main() {
  const args = process.argv.slice(2);
  const skipBlogHtml = args.some((arg) => SKIP_FLAGS.includes(arg)) || process.env.SKIP_BLOG_HTML === '1';
  const ngArgs = args.filter((arg) => !SKIP_FLAGS.includes(arg));

  run('npm', ['run', 'generate:prerender-routes']);

  if (skipBlogHtml) {
    console.log('Skipping Markdown -> HTML conversion for blog posts (--skip-blog-html).');
  } else {
    run('npm', ['run', 'convert:blog-markdown']);
  }

  run('npx', ['ng', 'serve', ...ngArgs]);
}

main();
