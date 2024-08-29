import type { RecipesCollection } from "@/lib/recipes";
import { useState } from "react";

export type IngredientsProps = {
  ingredients: RecipesCollection[number]["data"]["ingredients"];
};

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  const [parts, setParts] = useState(2);

  return (
    <div>
      <div className="flex flex-row space-x-2 items-center">
        <button
          onClick={() => {
            setParts((s) => s - 1);
          }}
          className="bg-secondary text-gray-950 rounded-full size-8"
        >
          -
        </button>
        <div className="min-w-36">
          {parts} part{parts === 1 ? "" : "s"}
        </div>
        <button
          onClick={() => {
            return setParts((s) => s + 1);
          }}
          className="bg-secondary text-gray-950 rounded-full size-8"
        >
          +
        </button>
      </div>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.variable * parts} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
