# 🥗 AI-Powered Indian Meal Planner

A personalized Indian meal planner that generates weekly meal plans based on your body metrics, dietary preference, fitness goal, and activity level — all with macro tracking and customization options.

## 🚀 Live Demo

👉 [View Live](https://diet-chart-gen-ts.vercel.app/)

---

## ✨ Features

- ✅ Weekly meal plan generation using Gemini AI
- 🍗 Vegetarian & Non-Vegetarian options
- 🏋️ Goal-based macros: Lose fat, Gain muscle, Maintain
- 📅 Auto-calculated BMR + TDEE based on input
- 🔁 Swap individual meals (coming soon)
- 📊 Daily macro breakdown (calories, protein, carbs, fat)
- 💾 Save meal plans to localStorage
- 🌙 Light & dark mode support

---


## ⚙️ Tech Stack

- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS** + **DaisyUI**
- **Zustand** for state management
- **Gemini API** for meal generation
- **localStorage** for data persistence

---

## 🧠 How It Works

1. You enter age, weight, height, gender, activity level, and goal
2. App calculates your **BMR** and **TDEE**
3. Based on your inputs and preferences, Gemini API generates a 7-day meal plan
4. You get a clean macro breakdown + daily meals
5. Meal plans are saved locally so refreshing doesn't lose your data

---

## 📁 Folder Structure

src/
├── components/
├── data/
├── lib/
├── pages/
├── types/

---

## 🧪 Future Improvements

- [ ] Meal swapping
- [ ] Editable protein targets
- [ ] Export plan as PDF or image
- [ ] Login & persistent storage (Firebase or Supabase)

---

## 🤝 Acknowledgements

- OpenAI Gemini API for meal generation
- Icons by [Lucide](https://lucide.dev/)
- Styled with Tailwind + DaisyUI

---

## 📬 Contact

Built with love by Amanpreet Singh.  