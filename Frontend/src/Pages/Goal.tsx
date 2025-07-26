import { useState } from "react";
import SelectOption from "../components/SelectOption";
import { useNavigate } from "react-router-dom";
import useUserData from "../data/useuserData";
import { calculateGoalCalories } from "@/components/Calculation";
import type { GoalType } from "@/types/user";

export default function Goal(){
    const{BMR, activityLevel} = useUserData.getState();
    const navigate = useNavigate();
    const[selected,setSelected] = useState("");
    const updateUserData = useUserData((state) => state.updateUserData);
    const goals = [
        { label: "Lose Weight", key: "cut"},
        { label: "Tone up (Maintain)", key: "maintain"},
        { label: "Build Muscle", key: "bulk"}
    ]
    return(
        <SelectOption 
            title="What is your Goal?"
            options={goals}
            selected={selected}
            onSelect={ (key) => {
                setSelected(key);
                updateUserData({goal: key});
                if (activityLevel && BMR !== null) {
                    const goalCals = calculateGoalCalories({bmr: BMR, activityLevel, goal: key as GoalType});
                    updateUserData({goalCals});
                } else {
                    console.error("BMR or activityLevel is null. Cannot calculate goal calories.");
                }
                navigate("/preference");
            }}
        />
    );
}