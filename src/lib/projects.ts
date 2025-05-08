import { getCollection } from "astro:content";

export async function getProjectCollection() {
  const collection = await getCollection("projects");

  return collection.map((project) => ({
    ...project,
    computed: { link: `/projects/${project.id}` },
  }));
}
