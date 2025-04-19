export default function AbouUs(){
    return(
        <div id="about" className="header relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-12 lg:py-0 lg:h-screen">
            <div className="w-full lg:w-1/2 text-center  lg:text-right z-10 mt-4">
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}
                 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-4 leading-tight">
                    ABOUT US
                </h1>
                <p className="header font-generalsans mb-6 font-medium text-base sm:text-lg">
                    At CO2 Labs, we strive to provide simple yet powerful software solutions and expert consultation to help your business thrive in the digital world.
                </p>
                <div className="w-full flex justify-center lg:justify-end mb-6 lg:mb-0">
                    <i className="fab fa-pagelines text-4xl sm:text-5xl lg:text-6xl text-green-600"></i>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center lg:mb-0 z-10">
                <img
                    src="./images/about-img.png"
                    alt="About"
                    className="w-64 sm:w-72 md:w-80 lg:w-96 max-w-full h-auto rounded-xl"
                />
            </div>
        </div>
    )
}