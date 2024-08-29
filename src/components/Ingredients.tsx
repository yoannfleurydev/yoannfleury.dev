import { Button } from "@/components/ui/button";
import type { RecipesCollection } from "@/lib/recipes";
import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

export type IngredientsProps = {
  ingredients: RecipesCollection[number]["data"]["ingredients"];
};

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  const [parts, setParts] = useState(2);

  return (
    <div>
      <div className="flex flex-row space-x-2 items-center">
        <Button
          size="icon"
          onClick={() => {
            setParts((s) => s - 1);
          }}
          disabled={parts <= 1}
        >
          <MinusCircle className="size-4" />
        </Button>
        <div className="min-w-36 text-center text-lg">
          {parts} part{parts === 1 ? "" : "s"}
        </div>
        <Button
          size="icon"
          onClick={() => {
            return setParts((s) => s + 1);
          }}
        >
          <PlusCircle className="size-4" />
        </Button>
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
