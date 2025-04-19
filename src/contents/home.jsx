import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();

        useEffect(() => {
            if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
                }, 100); 
            }
            }
        }, [location]);
        
    return (
        <div id="home"
            className="header relative flex flex-col-reverse lg:flex-row items-center justify-between lg:px-16 lg:py-0 lg:h-screen bg-no-repeat bg-right bg-contain pt-36"
            style={{
                backgroundImage: 'url(./images/backdrop.png)',
                backgroundSize: '30%',
            }}>
            <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}
                 className="textPrimary text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-4 leading-tight">
                    Where Code Meets
                </h1>
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}
                 className="buttonPrimary inline-block text-white text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-4 leading-tight pr-2 pl-2">
                    Creativity
                </h1>
                <p className="header font-generalsans mb-6 font-medium text-base sm:text-lg mt-20 lg:mt-0">
                    Harnessing the power of our Coding Collective to build solutions for your business needs.
                </p>
                <button className="buttonPrimary mb-10 font-generalsans font-medium text-white py-2 px-6 rounded-lg transition text-sm sm:text-base">
                    Get a free consult
                </button>
            </div>

            <div className="hidden sm:flex sm:w-1/2 justify-center">
                <img src="./images/heroimg.png" alt="Hero" className="lg:w-96 rounded-xl h-auto" />
            </div>
        </div>
    );
}
