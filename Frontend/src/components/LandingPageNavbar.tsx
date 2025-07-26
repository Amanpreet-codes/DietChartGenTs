export default function LandingNav(){
    return(
        <nav>
            <div className="navbar bg-transparent shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl text-primary">DietChartGen</a>
                </div>
                <div className=" navbar-end flex gap-8 items-center text-white">
                    <a href="#About">About Us</a>
                    <a href="#WhyChooseUs"> Why Choose Us</a>
                    <button className="btn btn-square btn-ghost hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}