import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client with API key for browser environment
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export async function generateMealPlanFromGemini(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text;

    // Check if text exists
    if (!text) {
      throw new Error('No response text received from Gemini');
    }

    let cleanedText = text.trim();
    
    // Remove markdown code block formatting if present
    cleanedText = cleanedText.replace(/```json/g, '');
    cleanedText = cleanedText.replace(/```/g, '');
    cleanedText = cleanedText.trim();

    // Find the JSON object in the response
    const jsonStart = cleanedText.indexOf('{');
    const jsonEnd = cleanedText.lastIndexOf('}') + 1;
    
    if (jsonStart !== -1 && jsonEnd !== -1) {
      cleanedText = cleanedText.substring(jsonStart, jsonEnd);
    }

    // Parse and return the JSON
    const mealPlan = JSON.parse(cleanedText);
    return mealPlan;

  } catch (error) {
    console.error('Error generating meal plan from Gemini:', error);
    
    // Return a fallback meal plan if the API fails
    return {
      breakfast: [
        {
          food_name: "Poha with Peas",
          calories: 250,
          protein: 8,
          carbs: 45,
          fat: 5,
          serving_size: "1 plate"
        }
      ],
      lunch: [
        {
          food_name: "Dal Chawal with Sabzi",
          calories: 400,
          protein: 15,
          carbs: 65,
          fat: 8,
          serving_size: "1 plate"
        }
      ],
      dinner: [
        {
          food_name: "Roti with Paneer Curry",
          calories: 350,
          protein: 20,
          carbs: 35,
          fat: 12,
          serving_size: "2 roti + 1 bowl curry"
        }
      ],
      snack: [
        {
          food_name: "Mixed Nuts",
          calories: 150,
          protein: 6,
          carbs: 5,
          fat: 12,
          serving_size: "30g"
        }
      ]
    };
  }
}