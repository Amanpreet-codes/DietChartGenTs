import { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import SelectOption from "../components/SelectOption";
import { activityLevels, type ActivityLevel } from "../data/Constants";
import useUserData from "../data/useuserData";

export default function ActivityLevels(): JSX.Element {
    const [selected, setSelected] = useState<string>("");
    const navigate = useNavigate();
    const updateUserData = useUserData((state) => state.updateUserData);

    return(
        <>
            <SelectOption 
                title="What is Your Activity level?"
                options={activityLevels}
                selected={selected}
                onSelect={(key) => {
                    setSelected(key);
                    updateUserData({activityLevel: key as ActivityLevel});
                    navigate("/goal")
                }}
            />
        </>
    );
}
