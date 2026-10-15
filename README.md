
## 🚀 Project Structure


```text
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src
│   ├── assets
│   ├── components
│   ├── layouts
│   └── pages
│       └── index.astro
├── tests/
│   └── example.spec.ts
├── astro.config.mjs
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── vitest.config.ts
```



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run test:unit`       | Runs Vitest unit tests once                      |
| `npm run test:unit:watch` | Runs Vitest unit tests in watch mode             |
| `npx playwright install`  | Downloads required browser binaries for E2E tests|
| `npm run test:e2e`        | Runs Playwright E2E tests headlessly             |
| `npm run test:e2e:ui`     | Runs Playwright E2E tests with interactive UI    |


