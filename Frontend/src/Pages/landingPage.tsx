import Hero from "@/components/ui/Hero";
import About from "@/components/About"
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function LandingPage(){
    return(
        <div>
            <Hero/>
            <About />
            <WhyChooseUs />
            <Footer />
        </div>
    );
}