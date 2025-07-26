import { useState, type JSX } from "react";
import { calculateBMR } from "../components/Calculation";
import { useNavigate } from "react-router-dom";
import useUserData from "../data/useuserData";
import type { Gender, Height } from "@/types/user";

export default function BmrCalc(): JSX.Element {
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<Gender>("");
    const updateUserData = useUserData((state) => state.updateUserData);
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<Height>({
        feet: 0,
        inches: 0
    });    
    const heightCm = height.feet * 30.48 + height.inches * 2.54;
    const navigate = useNavigate();
    const [errors,setErrors] = useState<string[]>([]);

    const validateInputs = (): string[] => {
        const errs: string[] = [];

        if (age < 15 || age > 80) errs.push("Age must be between 15 and 80.");
        if (gender !== "male" && gender !== "female") errs.push("Please select a valid gender.");
        if (height.feet <= 0) errs.push("Height (feet) must be greater than 0.");
        if (height.inches < 0) errs.push("Height (inches) cannot be negative.");
        if (weight <= 0) errs.push("Weight must be greater than 0.");

        return errs;
    };

    const handleSubmit = (): void => {
        console.log("Inputs:", { age, gender, heightCm, weight }); 
        const validationErrors = validateInputs();
        if(validationErrors.length > 0 ){
            setErrors(validationErrors);
            return;
        }
        const result = calculateBMR({age, gender, heightCm, weight});
        updateUserData({ age, gender, heightCm, weight, BMR: result });
        console.log("BMR: ", result);

        setTimeout(() => {
            navigate("/activityLevel");
        }, 200); 
    };

    return(
        <div className="container flex flex-col items-center bg-base-100 text-base-content max-w-[720px] mx-auto px-4 py-8">
                <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2"> BMR calculator</h1>
                <p className="text-md text-base-content text-center"> The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting). </p>

                {errors.length > 0 && (
                    <div className="alert alert-error m-4 max-w-xs text-sm">
                        <ul className="list-disc ml-4">
                            {errors.map((err, i) => (
                                <li key={i}>{err}</li>
                            ))}
                        </ul>
                    </div>
                )}
            {/* <div className="flex w-full items-center gap-15"> */}
                <form 
                    className="max-w-xs mt-10"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit();
                        
                    }}>
                    <fieldset className="fieldset bg-base-200 border-base-300 text-base-content rounded-box w-xs border p-6 ">
                    <legend className="fieldset-legend">Enter Your Details</legend>

                    <div className="flex gap-2">
                        <label htmlFor="age" className="w-13 text-sm"> Age </label>
                        <input
                            type="number" 
                            id="age"
                            value={inputNumberValue(age)} 
                            className="input input-bordered w-1/2" 
                            placeholder="Enter Your Age" 
                            onChange={(e) => setAge(Number(e.target.value) || 0)}
                        />
                        <p className="text-xs opacity-60 ">Between 15-80</p>

                    </div>

                    <div className="flex gap-2 justify-between my-3">
                        <label className="w-16 text-sm"> Gender </label>

                        <div className="flex gap-3">
                            <label htmlFor="male" className="flex gap-1 items-center w-20">
                                Male 
                                <input name="gender"  id="male" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value as Gender)} type="radio"/>
                            </label>
                            
                            <label htmlFor="female" className=" flex gap-1 items-center w-20">
                                Female
                                <input name="gender" id="female" type="radio" value="female" checked={gender==="female"} onChange={(e) => setGender(e.target.value as Gender)} />
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center mb-3">
                        <label htmlFor="heightF" className="w-20 text-sm">Height</label>
                        <input 
                            type="number" 
                            id="heightF"
                            className="input input-bordered  w-1/2 placeholder:text-right" 
                            placeholder="Feet" 
                            value={inputNumberValue(height.feet)}
                            onChange={(e) => setHeight(prev => ({...prev, feet: Number(e.target.value)}))}
                        />
                        
                        <input 
                            type="number" 
                            id="heightI"
                            className="input input-bordered w-1/2 placeholder:text-right" 
                            placeholder="inches" 
                            value={inputNumberValue(height.inches)}
                            onChange={(e) => setHeight(prev => ({...prev, inches: Number(e.target.value)}))}
                        />
                    </div>

                    <div className="flex gap-2 items-center">
                        <label htmlFor="weight" className="w-14 text-sm">Weight</label>
                        <input 
                            type="number"  
                            id="weight"
                            className=" input input-bordered placeholder:text-right w-1/4" 
                            placeholder="kgs"
                            value={inputNumberValue(weight)}
                            onChange={(e) => setWeight(Number(e.target.value))} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4"> Calculate</button>
                </fieldset>
                </form>
            {/* </div> */}
                <div className="text-base-content text-[15px] leading-relaxed space-y-4 mt-10 max-w-3xl">
                    <p>
                        The basal metabolic rate (BMR) is the amount of energy needed while resting in a temperate environment when the digestive system is inactive. It is the equivalent of figuring out how much gas an idle car consumes while parked. In such a state, energy will be used only to maintain vital organs, which include the heart, brain, kidneys, nervous system, intestines, liver, lungs, sex organs, muscles, and skin. For most people, upwards of ~70% of total energy (calories) burned each day is due to upkeep. Physical activity makes up ~20% of expenditure and ~10% is used for the digestion of food, also known as thermogenesis.
                    </p>
                    <p>
                        The BMR is measured under very restrictive circumstances while awake. An accurate BMR measurement requires that a person's sympathetic nervous system is inactive, which means the person must be completely rested. Basal metabolism is usually the largest component of a person's total caloric needs. The daily caloric need is the BMR value multiplied by a factor with a value between 1.2 and 1.9, depending on activity level.
                    </p>
                    <p>
                        In most situations, the BMR is estimated with equations summarized from statistical data. The Harris-Benedict Equation was one of the earliest equations introduced. It was revised in 1984 to be more accurate and was used up until 1990, when the Mifflin-St Jeor Equation was introduced. The Mifflin-St Jeor Equation has been shown to be more accurate than the revised Harris-Benedict Equation. The Katch-McArdle Formula is slightly different in that it calculates resting daily energy expenditure (RDEE), which takes lean body mass into account, something that neither the Mifflin-St Jeor nor the Harris-Benedict Equation does. Of these equations, the Mifflin-St Jeor Equation is considered the most accurate equation for calculating BMR.
                    </p>
                    </div>
                <div>
            </div>
        </div>
    );
}
function inputNumberValue(val: number) {
  return val === 0 ? "" : val;
}