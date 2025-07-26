import { useState } from "react";
import SelectOption from "../components/SelectOption";
import { useNavigate } from "react-router-dom";
import useUserData from "../data/useuserData";

export default function FoodPreference(){
    const navigate = useNavigate();
    const[selected,setSelected] = useState("");
    const updateUserData = useUserData((state) => state.updateUserData);
    const preference = [
        { label: "Vegetarian", key: "veg"},
        { label: "Non-Vegetarian", key: "non-veg"},
        { label: "Vegetarian but can eat eggs", key: "eggitarian only"}
    ]
    return(
        <SelectOption 
            title="What are your Dietary Preferences?"
            options={preference}
            selected={selected}
            onSelect={ (key) => {
                setSelected(key);
                updateUserData({preference: key});
                navigate("/MacroPage");
            }}
        />
    );
}