from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any
import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

url: str = os.environ.get("SUPABASE_URL") # type: ignore
key: str = os.environ.get("SUPABASE_KEY") # type: ignore
supabase: Client = create_client(url, key)

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://diet-chart-gen-ts.vercel.app"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class InputData(BaseModel): 
    goal: str
    goalCals: float
    preference: str

class MealPlanSaveRequest(BaseModel):
    inputs:InputData
    mealPlan: dict

@app.get("/")
async def root():
    return {"message": "Diet Chart Generator API"}

@app.get("/meal-plans")
async def get_meal_plans():
    try:
        response = (
            supabase.table("MealPlan")
            .select("*")
            .execute()
        )
        return {"data": response.data}
    except Exception as e:
        return {"error": str(e)}
    

@app.post("/mealplan")
async def mealPlan(search_data: InputData):
    try:
        response = (
            supabase.table("MealPlan")
            .select("*")
            .eq("goal", search_data.goal)
            .eq("preference", search_data.preference)
            .gte("goal_cals", search_data.goalCals - 100)
            .lte("goal_cals", search_data.goalCals + 100)
            .limit(1)
            .execute()
        )
        
        if response.data:
            # Found a matching plan!
            meal_plan = response.data[0]
            return {"meal_plan": meal_plan["mealPlan"]}  # Return just the meal plan JSON
        else:
            # No matching plan found - frontend will generate with Gemini
            raise HTTPException(status_code=404, detail="No matching meal plan found")
            
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/mealplan/save")
async def mealPlanSave(SaveMealPlan:MealPlanSaveRequest):
    response = supabase.table("MealPlan").insert({
            "goal": SaveMealPlan.inputs.goal,
            "goal_cals": SaveMealPlan.inputs.goalCals,
            "preference": SaveMealPlan.inputs.preference,
            "mealPlan": SaveMealPlan.mealPlan          
    }).execute()
    return response.data


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)