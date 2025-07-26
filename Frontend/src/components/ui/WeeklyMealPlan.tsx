import MealSection from "./MealSection";
import type { MealItem } from "@/types/user";

type DailyMeals = {
  breakfast: MealItem[];
  lunch: MealItem[];
  dinner: MealItem[];
  snack: MealItem[];
};

type WeeklyMealPlan = {
  [day: string]: DailyMeals;
};

type Props = {
  plan: WeeklyMealPlan;
};

export default function WeeklyMealView({ plan }: Props) {
  return (
    <div className="space-y-12">
      {Object.entries(plan).map(([day, meals]) => (
        <div key={day} className="border-b pb-6">
          <h1 className="text-3xl font-bold mb-4 capitalize">{day}</h1>
          <div className="space-y-8">
            {Object.entries(meals).map(([mealType, items]) => (
              <MealSection key={mealType} mealType={mealType} items={items} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
