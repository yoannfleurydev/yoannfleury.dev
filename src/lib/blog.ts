import { getCollection } from "astro:content";

export async function getBlogCollection() {
  const collection = await getCollection("blog", ({ data }) => {
    return Boolean(import.meta.env.DEV || data.published);
  });

  return collection
    .toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((post) => ({ ...post, computed: { link: `/blog/${post.id}` } }));
}
