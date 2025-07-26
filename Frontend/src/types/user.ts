import { activityMultipliers } from "@/data/Constants";

export type BMRInput = {
  age: number;
  gender: Gender;
  heightCm: number;
  weight: number;
}
export type ActivityLevelKey = keyof typeof activityMultipliers;

export type GoalType = "cut" | "bulk" | "maintain";

export type GoalInput = {
  bmr: number;
  activityLevel: ActivityLevelKey;
  goal: GoalType;
}

export type Height = {
    feet: number;
    inches: number;
};

export type Gender = "male" | "female" | "";

export type MealItem = {
  food_name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  serving_size: string;
}

export type WeeklyMealPlan = {
  [day: string]: {
    breakfast: MealItem[];
    lunch: MealItem[];
    dinner: MealItem[];
    snack: MealItem[];
  };
};