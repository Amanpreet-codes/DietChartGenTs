import type { MealItem } from "@/types/user";

export function getDailyMacroTotals(
  weeklyMealPlan: Record<string, Record<string, MealItem[]>>
): Record<string, { calories: number; protein: number; carbs: number; fat: number }> {
  const dailyTotals: Record<string, { calories: number; protein: number; carbs: number; fat: number }> = {};

  for (const [day, meals] of Object.entries(weeklyMealPlan)) {
    const allItems = Object.values(meals).flat();

    dailyTotals[day] = {
      calories: allItems.reduce((sum, item) => sum + item.calories, 0),
      protein: allItems.reduce((sum, item) => sum + item.protein, 0),
      carbs: allItems.reduce((sum, item) => sum + item.carbs, 0),
      fat: allItems.reduce((sum, item) => sum + item.fat, 0)
    };
  }

  return dailyTotals;
}
