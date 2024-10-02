import { getCollection } from "astro:content";

export type RecipesCollection = Awaited<ReturnType<typeof getRecipes>>;
export async function getRecipes() {
  const collection = await getCollection("recipes", ({ data }) => {
    return Boolean(import.meta.env.DEV || data.published);
  });

  return collection.map((recipe) => ({
    ...recipe,
    computed: { link: `/recipes/${recipe.slug}/` },
  }));
}
