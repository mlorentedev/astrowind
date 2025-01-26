# mlorente.dev

This is mi minimal website [mlorente.dev](https://mlorente.dev).

## Features

- ✅ Same features as Astro Starter Kit Blog
- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
│       ├── blog/
│           ├── [slug]/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name and its language parameter.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents.
Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.
Or use `getBlogPosts()` from the `src/content/config.ts` file, which adds the blog_slug key as a property to the collection. This is the slug that will be used in the header, blogs list page and as canonical and alternate URLs.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lint`            | Lint your code for formatting and errors         |
| `npm run format`          | Format your code for consistency                 |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Tips

To disable the devToolbar, run this command:

```shell
    astro preferences disable devToolbar
```

## 👀 Want to learn more?

Check out usefull documentation for this template:

- [Astro](https://docs.astro.build)
- [Astro sitemaps](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Credit

This theme is based off of [Astro Starter Kit Blog template](https://github.com/withastro/astro/tree/latest/examples/blog).
