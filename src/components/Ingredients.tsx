import { Button } from "@/components/ui/button";
import type { RecipesCollection } from "@/lib/recipes";
import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import slugify from "slugify";

export type IngredientsProps = {
  ingredients: RecipesCollection[number]["data"]["ingredients"];
};

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  const [portions, setPortions] = useState(2);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row space-x-2 items-center">
        <Button
          size="icon"
          onClick={() => {
            setPortions((s) => s - 1);
          }}
          disabled={portions <= 1}
        >
          <MinusCircle className="size-4" />
        </Button>
        <div className="min-w-36 text-center text-lg">
          {portions} portion{portions === 1 ? "" : "s"}
        </div>
        <Button
          size="icon"
          onClick={() => {
            return setPortions((s) => s + 1);
          }}
        >
          <PlusCircle className="size-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {ingredients.map((ingredient) => {
          const slug = slugify(ingredient.name);

          return (
            <div className="flex items-center space-x-2" key={slug}>
              <Checkbox id={slug} />
              <label
                htmlFor={slug}
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:line-through peer-data-[state=checked]:text-gray-400"
              >
                {ingredient.variable ? ingredient.variable * portions : null}{" "}
                {ingredient.unit} {ingredient.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
