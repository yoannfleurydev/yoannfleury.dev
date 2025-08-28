import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { rendererRich, transformerTwoslash } from "@shikijs/twoslash";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentIntellisense: true,
  },
  site: "https://www.yoannfleury.dev",
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      themes: {
        light: "github-dark",
        dark: "github-dark",
      },
      transformers: [
        transformerTwoslash({
          explicitTrigger: true,
          renderer: rendererRich(),
        }),
      ],
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx({
      syntaxHighlight: "shiki",
    }),
    sitemap(),
    react(),
  ],
});
