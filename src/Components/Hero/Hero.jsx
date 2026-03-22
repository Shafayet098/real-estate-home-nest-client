import { useEffect, useState } from "react";
import { Link } from "react-router";

const slides = [
    {
        id: 1,
        title: "Find Your Perfect Home",
        subtitle: "Explore handpicked properties designed for comfort and style",
        button: "Browse Homes",
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        title: "Welcome to Your Nest",
        subtitle: "Where every corner feels like home",
        button: "Get Started",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Modern Living Starts Here",
        subtitle: "Discover spaces built for your lifestyle",
        button: "View Listings",
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        title: "Invest in Your Future",
        subtitle: "Smart properties for smarter investments",
        button: "Explore Now",
        image:
            "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        title: "Live Better",
        subtitle: "Because your home should inspire you",
        button: "Find Out More",
        image:
            "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];


const Hero = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const getPosition = (index) => {
        const diff = (index - active + slides.length) % slides.length;

        if (diff === 0) {
            return "translate-x-0 scale-100 z-30 opacity-100";
        }
        if (diff === 1) {
            return "translate-x-[55%] scale-90 z-20 opacity-70";
        }
        if (diff === slides.length - 1) {
            return "-translate-x-[55%] scale-90 z-20 opacity-70";
        }
        return "scale-75 opacity-0 z-10";
    };
    return (
        <div className="relative w-full mx-auto h-[90vh] flex items-center justify-center overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    onClick={() => setActive(index)}
                    className={`absolute w-[80%] md:w-[80%] h-[90vh] cursor-pointer rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out ${getPosition(
                        index
                    )}`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-8 sm:bottom-8 sm:left-16 text-white flex flex-col sm:flex-row gap-6 items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold text-white/70">{slide.title}</h2>
                            <p className="text-white/80 mt-2">{slide.subtitle}</p>
                        </div>
                        <div>
                            <Link className="relative inline-flex items-center justify-center p-3 px-10 py-3  overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center text-primary transition-all duration-300 transform group-hover:translate-x-full ease">{slide.button} </span>
                                <span className="relative invisible">Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={() =>
                    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
                }
                className="absolute left-4 md:left-10 z-40 w-12 h-12 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition"
            >
                &#10094;
            </button>

            <button
                onClick={() => setActive((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 md:right-10 z-40 w-12 h-12 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Hero;