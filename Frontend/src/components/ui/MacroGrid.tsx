import type { MealItem } from "@/types/user";
import MacroBox from "./MacroBox";

export default function MacroDisplay({protein, carbs, fat}:MealItem){
    return(
        <div className="grid grid-cols-3 gap-2 text-center">
            <MacroBox label = "Protein" value = {protein} color = "text-red-500"/>
            <MacroBox label = "Carbs" value = {carbs} color = "text-blue-500"/>
            <MacroBox label = "Fat" value = {fat} color = "text-yellow-500"/>
        </div>
    );
}