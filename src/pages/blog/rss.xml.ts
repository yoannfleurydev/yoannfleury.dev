import { getBlogCollection } from "@/lib/blog";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = async function get(context) {
  const posts = await getBlogCollection();
  return rss({
    title: "Yoann Fleury’s Blog",
    description:
      "My feedbacks and thinking around development, in French or English",
    site: context.site!, // <- breaks on build if site is not defined, not an issue
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: post.computed.link,
      pubDate: post.data.date,
      author: "yoannfleurydev@gmail.com (Yoann Fleury)",
      categories: post.data.tags,
    })),
    // (optional) inject custom xml
    customData: `<language>fr-FR</language>`,
  });
};
