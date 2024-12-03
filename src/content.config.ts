import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    url: z.string().url().optional(),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
    language: z.string().optional(),
    location: z.string().optional(),
    vod: z.string().url().optional(),
    slides: z.string().optional(),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/recipes" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      published: z.boolean().optional(),
      image: image(),
      ingredients: z.array(
        z.object({
          name: z.string(),
          variable: z.number().optional(),
          unit: z.string().optional(),
        }),
      ),
    }),
});

export const collections = {
  talks,
  blog,
  recipes,
};
