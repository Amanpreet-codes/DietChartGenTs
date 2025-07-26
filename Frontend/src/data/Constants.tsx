export const activityLevels = [
    {label: "Sedentary (little to no exercise)", key: "sedentary"},
    {label: "Lightly active (1–3 days/week)", key: "light"},
    {label: "Moderately active (3–5 days/week)", key: "moderate"},
    {label: "Very active (6–7 days/week)", key: "active"},
    {label: "Super active (twice a day or heavy labor)", key: "veryActive"}
];

export const activityMultipliers =  {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
} as const;

export type ActivityLevel = keyof typeof activityMultipliers | null;

export const macroConfig = [
    { label: "Total Calories", key: "calories", color: "text-orange-500", unit: "" },
    { label: "Protein", key: "protein", color: "text-blue-500", unit: "g" },
    { label: "Carbs", key: "carbs", color: "text-green-500", unit: "g" },
    { label: "Fat", key: "fat", color: "text-yellow-500", unit: "g" },
] as const;