import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { rendererRich, transformerTwoslash } from "@shikijs/twoslash";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { sitemapCopier } from "./sitemap-copier.ts";

// https://astro.build/config
export default defineConfig({
  experimental: {
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
    sitemapCopier(),
    react(),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
