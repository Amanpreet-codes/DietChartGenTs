from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from tinydb import TinyDB, Query

app = FastAPI()
db = TinyDB("mealPlan.json")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://diet-chart-gen-ts.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputData(BaseModel):
    age: int
    gender: str
    weight: float
    BMR: float
    goal: str
    goalCals: float
    preference: str

class MealPlanSaveRequest(BaseModel):
    inputs: InputData
    meal_plan: dict

@app.post("/mealplan")

def get_mealplan(user_input: InputData):
    Meal = Query()

    result = db.search(
        (Meal.age == user_input.age) &
        (Meal.gender == user_input.gender) &
        (Meal.weight == user_input.weight) &
        (Meal.goal == user_input.goal) &
        (Meal.BMR == user_input.BMR) &
        (Meal.goalCals == user_input.goalCals) &
        (Meal.preference == user_input.preference)
    )

    if result:
        return { "meal_plan": result[0]['meal_plan'] }
    return{"meal_plan": None }


@app.get("/mealplan/all")
def get_all_mealplans():
    return db.all()

@app.post("/mealplan/save")

def save_mealplan(request: MealPlanSaveRequest):
    db.insert({
        "age": request.inputs.age,
        "gender": request.inputs.gender,
        "weight": request.inputs.weight,
        "goal": request.inputs.goal,
        "BMR": request.inputs.BMR,
        "goalCals": request.inputs.goalCals,
        "preference": request.inputs.preference,
        "meal_plan": request.meal_plan
    })
    return{"status": "saved"}