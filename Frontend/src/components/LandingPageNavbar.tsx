export default function LandingNav(){
    return(
        <nav>
            <div className="navbar bg-transparent shadow-sm px-4 sm:px-6 lg:px-8">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-lg sm:text-xl text-primary font-bold">
                        DietChartGen
                    </a>
                </div>
                <div className="navbar-end flex gap-4 sm:gap-8 items-center text-white">
                    <a 
                        href="#About" 
                        className="text-sm sm:text-base hover:text-primary transition-colors duration-200 px-2 py-1"
                    >
                        About
                    </a>
                    <a 
                        href="#WhyChooseUs" 
                        className="text-sm sm:text-base hover:text-primary transition-colors duration-200 px-2 py-1"
                    >
                        Why Us
                    </a>
                </div>
            </div>
        </nav>
    );
}