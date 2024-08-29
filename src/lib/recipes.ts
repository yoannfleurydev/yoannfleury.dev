import { getCollection } from "astro:content";

export type RecipesCollection = Awaited<ReturnType<typeof getRecipes>>;
export async function getRecipes() {
  const collection = await getCollection("recipes");

  return collection.map((recipe) => ({
    ...recipe,
    computed: { link: `/recipes/${recipe.slug}` },
  }));
}
