# [get-the-solution.net](https://get-the-solution.net/)

This repository contains the static blog and portfolio website for get-the-solution.net. The app is built with Angular 22 and uses a custom static blog pipeline where Markdown posts are converted to HTML before the app is built.

## Prerequisites

- Node.js 22.x
- npm
- pandoc

Install dependencies:

```bash
npm install
```

## Local development

Run the app locally:

```bash
npm run start
```

This runs the prestart hook, which generates prerender routes and converts the Markdown blog posts to HTML before starting Angular dev server.

## Production build

Build the application for production:

```bash
npm run build
```

The build also runs the prebuild hook, which performs:

- `npm run generate:prerender-routes`
- `npm run convert:blog-markdown`

These steps generate the static routes and convert all markdown posts in `src/assets/database/` into HTML files.

## Blog workflow

The project uses a custom static blog pipeline:

- blog metadata lives in `src/assets/database/blog.json`
- Markdown content is stored in `src/assets/database/*.md`
- `pandoc` converts those files into matching `.html` files
- `scripts/generate-prerender-routes.js` creates the prerender list for Angular

When adding a new blog post, ensure that the metadata and source file are consistent and the prerender route generation runs as part of the build/start pipeline.

## Useful scripts

```bash
npm run generate:prerender-routes
npm run convert:blog-markdown
npm run test
```

## Deployment

1. create a feature branch
2. make your changes
3. validate with a build
4. open a pull request to merge into `main`
5. deploy the application through the configured CI/CD pipeline

## Notes

This project is a static Angular site with custom prerendering and a markdown-based blog system. The generated output is published as the production website.
