import { getCollection } from "astro:content";

export function getBlogCollection() {
  return getCollection("blog", ({ data }) => {
    return Boolean(import.meta.env.DEV || data.published);
  }).then((data) =>
    data.toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime())
  );
}
