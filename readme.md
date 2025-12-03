# Overview

This is a [Vitepress](https://vitepress.dev/) site that uses [Codex](https://doc.wikimedia.org/codex/main/) design tokens and components, and includes a few custom [Vue](https://vuejs.org/) components for more involved functionality.

Each page on the website has a corresponding `.md` file inside of `/docs`. The folder structure and the site architecture match; the root directory is `/docs`, and the `/docs/index.md` file corresponds to the root page of the website. The other top-level pages are also in the root `/docs` folder, such as `help.md`, `research.md`, etc.

The rest of the pages are inside of `/docs/scenarios` and `/docs/attribution-signals`.

Read more about using markdown files in Vitepress [here](https://vitepress.dev/guide/markdown).

# Development

- Ensure all packages are installed (run either `yarn` or `npm i`)
- To start a local server run `yarn run docs:dev`
- To deploy changes, push a commit to GitHub (the site is currently hosted on [Vercel](https://vercel.com/), which is connected to the GitHub project, so whenever a commit is made a deployment is triggered)

# Key files

There are a few non-markdown files that are important:

### `data.ts`

This is where scenarios, attribution signals, and the scenarios:signals mapping is defined. Whenever you need to display scenarios or attribution signals (e.g. in the sidebar, on an overview page, in the filter component, etc.) you should be doing so dynamically by importing `data.ts` and mapping the necessary values. In other words, you should never be hard-coding lists of scenarios or signals.

### `config.mts`

This is the necessary Vitepress config file. It is primarily responsible for rendering the header and sidebar with site navigation. You can read more about it [here](https://vitepress.dev/reference/site-config).

### `custom.less`

This is for global style overrides. It is a [less](https://lesscss.org/) file, and imports Codex, so you can use Codex design tokens as mixins (e.g. `margin-bottom: @spacing-200;`).

### `index.ts`

This is for global component registration. Any components registered here can be used in any file accross the site.

# Filters

The filter component (`/FilterButtons.vue`) enables lists of attribution signals to be filtered by a specific scenario, based on the mapping defined in `data.ts`. The filter state is global, so it persists across pages. The logic is defined in `useFilters.ts`. `FilteredContent.vue` allows any content to show/hide based on the filter state. For example, any markdown wrapped like this:

```
<FilteredContent scenario="search">
  # Some markdown in here
  - Item
  - Item
</FilteredContent>
```

will only be visible if the current filter state is set to `search`.

# Components

#### Configurable attribution demo

- `WikipediaSearchCard.vue` renders the configured preview
- `AttributionControls.vue` renders the controls that allow you to configure the demo
- `WikipediaAttributionDemo.vue` wraps the previous two components, and handles the logic and state for the demo

#### `Card.vue`

- `Card.vue` is a generic card component. Cards can optionally be links to pages by using `variant="link"`, such as:

```
<Card
  variant="link"
  url="/scenarios/search"
  ...
/>
```

#### `GridLayout.vue`

Simple layout component for creating 2 column grids.
