
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


## 📝 Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

| Prefix | Usage |
| :--- | :--- |
| `feat:` | New user-facing features or components |
| `fix:` | Bug fixes |
| `build:` | Build configuration, bundler, or dependency updates (`astro.config`, `vitest.config`, `package.json`) |
| `ci:` | CI/CD pipeline changes (`.github/workflows/`) |
| `test:` | Adding, updating, or refactoring unit or E2E tests |
| `docs:` | Documentation updates only (`README.md`, comments) |
| `refactor:` | Code restructuring without behavior changes |
| `style:` | Formatting, whitespace, or linting adjustments |
| `chore:` | Routine maintenance tasks (e.g., updating `.gitignore`) |

**Format:** `<type>(optional-scope): <imperative description>`  
**Example:** `feat(navbar): add responsive desktop navigation bar`