import {
  CardContent,
  CardHeader,
  CardTitle,
  Card
} from "@/components/ui/card";
import MacroDisplay from "./MacroGrid";
import type { MealItem } from "@/types/user";

export default function MealCard(item:MealItem) {
    return(
        <Card className="hover:bg-base-200">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">
                    {item.food_name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                    Serving: {item.serving_size}
                </p>
            </CardHeader>
            
            <CardContent className="space-y-3">
                {/* Calories - Main highlight */}
                <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">
                        {item.calories}
                    </div>
                    <div className="text-sm text-muted-foreground">calories</div>
                </div>
            {/* Macros Grid */}
                <MacroDisplay {...item}/>
            </CardContent>
        </Card>
    );
}