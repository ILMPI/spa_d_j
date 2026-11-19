import { defineConfig } from 'astro/config';

export default defineConfig({
    site: "https://ILMPI.github.io",
    base: "/spa_d_j",
    //trailingSlash: "always",
      i18n: {
    locales: [
      "es",
      "en",
      {
        path: "eus",
        codes: ["eu"],
      },
    ],
    defaultLocale: "es",
    routing: {
        prefixDefaultLocale: false
      }
  }

});
