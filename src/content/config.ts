import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const talks = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
    language: z.string().optional(),
    location: z.string().optional(),
    vod: z.string().url().optional(),
  }),
});

export const collections = {
  talks,
  blog,
};
