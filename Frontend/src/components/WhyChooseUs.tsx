// components/WhyChooseUs.tsx
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Personalized Meal Plans",
    description: "Custom-tailored meals based on your goals, dietary preferences, and activity level.",
  },
  {
    title: "Macro Optimization",
    description: "Each plan is balanced to hit your protein and calorie targets with precision.",
  },
  {
    title: "Meal Swapping",
    description: "Don’t like something? Instantly swap meals without breaking your macro balance.",
  },
  {
    title: "Local Indian Foods",
    description: "Built for the Indian diet — with real local meals, not just western templates.",
  },
  {
    title: "7-Day Variety",
    description: "No boring repeats. Your plan changes daily while keeping macros consistent.",
  },
  {
    title: "Offline Saving",
    description: "Save your plan to localStorage and access it anytime, anywhere — no login needed.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="WhyChooseUs" className="py-16 bg-white dark:bg-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Unlock personalized Indian meals tailored to your fitness goals — no guesswork, just results.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 dark:bg-neutral text-base-content rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-green-500 w-6 h-6 shrink-0" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
