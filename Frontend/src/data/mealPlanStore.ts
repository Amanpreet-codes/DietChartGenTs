import {create} from "zustand";
import { persist } from "zustand/middleware";
import type { WeeklyMealPlan } from "@/types/user";

type UserInputs = {
  age: number;
  gender: string;
  heightCm: number;
  weight: number;
  activityLevel: string;
  goal: string;
  preference: string;
};


interface MealPlanStore{
    weeklyMealPlan: WeeklyMealPlan | null;
    loading:boolean;
    setWeeklyMealPlan: (plan: WeeklyMealPlan, inputs: UserInputs) => void;
    lastInputs: UserInputs | null;
    setLoading:(value:boolean) => void;
    ClearMealPlan: () => void;
}


export const useMealPlanStore = create<MealPlanStore>()(
    persist(
        (set) => ({
            weeklyMealPlan:null,
            loading:false,
            lastInputs: null,
            setWeeklyMealPlan: (plan, inputs) => set({weeklyMealPlan:plan, lastInputs: inputs}),
            ClearMealPlan: () => set({weeklyMealPlan:null}),
            setLoading: (value) => set({loading:value})
        }),
        {
            name: "mealPlan-storage",
        }
    )
);