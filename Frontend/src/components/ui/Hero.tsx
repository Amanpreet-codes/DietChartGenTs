import bgImage from "../../assets/LandingPageImage.jpg";
import LandingNav from "@/components/LandingPageNavbar";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
        <div className="w-full absolute top-0 left-0 z-20">
            <LandingNav />
        </div>
        <div className="hero-overlay bg-black/60 "></div>
        <div className="hero-content relative z-10 w-full flex flex-col md:items-end md:text-center md:p-20 text-neutral-content p-8">
            <div className="max-w-lg">
                <h1 className="text-5xl font-bold"> Personalized Indian Meals, Tailored to You</h1>
                <p className="py-6">
                     Get a 7-day meal plan based on your goals, preferences, and macros — packed with authentic Indian flavors and zero guesswork.
                </p>
                <button className="btn btn-primary" onClick={() => navigate("/BmrCalc")}>Get Started</button>
            </div>
        </div>
    </div>
  );
}
