import useUserData from "@/data/useuserData";
import { generateMealPlanFromGemini } from "./geminiFetchPlan";

export async function generateMealPlan(){
    const {age, gender, weight , goal, BMR, goalCals,preference} = useUserData.getState();

    console.log("Sending to backend:", { age, gender, weight, goal, BMR, goalCals, preference });   
    try{

        const response = await fetch("https://dietchartgents.onrender.com/mealplan", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({age, gender, weight, goal, BMR, goalCals, preference}),
        });
        
        
        if(response.ok) {
            const data = await response.json();
            if( data.meal_plan) {
                return data.meal_plan;
            }
        }
    }catch(e){
        console.warn("Meal plan not found in DB, Falling back to Gemini.");
    }

    const prompt = `
        Generate a realistic 7-day (1 week) Indian meal plan for a ${age}-year-old ${weight}kg ${gender} trying to ${goal}. 
        Their Calculated BMR IS ${BMR}, and calculated Goal calories are supposed to be ${goalCals}.
        The user follows a ${preference} diet. Generate a meal plan accordingly.
        Ensure each day's meals are different but nutritionally balanced and high in protein. 
        Don't repeat meals too much but surely keep a balance.
        Ensure it's high in protein.
        Return only a JSON like this:
        {
            "day 1": {
            "breakfast": [{ "food_name": "Paneer Bhurji", "calories": 320, "protein": 22, "carbs": 5, "fat": 20, "serving_size": 1 plate}],
            "lunch": [...],
            "dinner": [...],
            "snack": [...]
            },
            "day2": {
            ...
            },
            ...
            "day7": {
            ...
            }
        }
        `;
    const mealPlan = await generateMealPlanFromGemini(prompt);
    
    try{
        await fetch("https://dietchartgents.onrender.com/mealplan/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inputs: {age, gender, weight, goal, BMR, goalCals, preference},
                meal_plan: mealPlan,
            }),
        });
    } catch(e) {
        console.error("Failed to save meal plan to backend", e);
    }
    return mealPlan;
}