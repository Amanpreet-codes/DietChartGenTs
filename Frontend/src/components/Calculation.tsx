import { activityMultipliers } from "../data/Constants";
import type { BMRInput, GoalInput } from "@/types/user";

export function calculateBMR({ age,  gender, heightCm, weight }: BMRInput):number {
  if (gender === "male") {
    return 10 * weight + 6.25 * heightCm - 5 * age + 5;
  } else if (gender === "female") {
    return 10 * weight + 6.25 * heightCm - 5 * age - 161;
  } else {
    throw new Error("Invalid gender");
  }
};
 
export function calculateGoalCalories({ bmr, activityLevel, goal }: GoalInput):number {
  const tdee = bmr * (activityMultipliers[activityLevel]);
  
  switch(goal){
    case "cut": 
      return tdee - 500;
    case "bulk":
      return tdee + 300;
    case "maintain":
      return tdee;
    default:
      return tdee; // Default to maintenance if goal is not recognized
  }
}