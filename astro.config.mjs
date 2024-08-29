import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { rendererRich, transformerTwoslash } from "@shikijs/twoslash";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentLayer: true,
    contentIntellisense: true,
  },
  site: "https://www.yoannfleury.dev",
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
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
