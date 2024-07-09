import { defineCollection, z } from "astro:content";

const talks = defineCollection({
  type: "content",
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
};
