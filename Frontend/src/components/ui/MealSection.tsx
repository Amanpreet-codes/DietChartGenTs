import type { MealItem } from "@/types/user";
import MealCard from "./MealCard";
import { Badge } from "./badge";

const mealEmojis: Record<string, string> = {
  breakfast: "🌅",
  lunch: "☀️",
  dinner: "🌙",
  snack: "🍎"
};

type Props = {
    mealType: string;
    items: MealItem[];
}

export default function MealSection({mealType, items}:Props){
    return(
        <div key={mealType} className="space-y-4">
              {/* Meal Type Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{mealEmojis[mealType] || "🍽️"}</span>
                <h2 className="text-2xl font-semibold capitalize text-accent">{mealType}</h2>
                <Badge variant="outline" className="ml-auto">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </Badge>
              </div>

              {/* Meal Cards Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, idx) => (
                  <MealCard key={idx} {...item} />
                ))}
              </div>
            </div>
    );
}