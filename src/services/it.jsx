export default function It() {
    return (
        <>
        <div
            className="header relative flex flex-col-reverse lg:flex-row items-center justify-between lg:px-16 lg:py-0 lg:h-screen bg-no-repeat bg-right bg-contain pt-36"
            style={{
                backgroundImage: 'url(./images/backdrop.png)',
                backgroundSize: '30%',
            }}>
            <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}
                 className="textPrimary text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-4 leading-tight">
                    IT Support Services
                </h1>
                <p className="header font-generalsans mb-6 font-medium text-base sm:text-lg mt-20 lg:mt-0">
                    “Comprehensive IT Support Solutions”
                </p>
                <hr className="border-t-4 border-black w-40 mx-auto lg:mx-0 my-6" />
            </div>

            <div className="hidden sm:flex sm:w-1/2 justify-center">
                <img src="./images/3.png" alt="Hero" className="lg:w-96 rounded-xl h-auto" />
            </div>
        </div>

        <section className="buttonPrimary h-screen text-white py-16 px-6 md:px-12 lg:px-24">
            <div className="relative mb-12">
                <h1
                    className="absolute font-bold top-0 left-0 text-primary-300 text-9xl opacity-10 select-none"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                    C02
                </h1>

                <h1
                    className="relative text-5xl font-bold tracking-widest pt-16 text-white"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                    C02 LABS
                </h1>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-2/5 flex justify-center ">
                <img
                    src="./images/itsup.png"
                    alt="Toolbox"
                    className="rounded-xl w-3/4 max-w-xs mx-auto items:center sm:w-full sm:max-w-sm"
                    />

                </div>

                <div className="w-full lg:w-3/5 text-center lg:text-left">
                    <p className="text-lg leading-relaxed font-generalsans font-medium text-end">
                         At CO2 Labs, we understand that effective IT support is crucial for your business success. Our comprehensive IT support solutions are tailored to meet the unique needs of your organization, providing you with peace of mind.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-16 px-6 md:px-16">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-80">
                <div className="flex gap-2 lg:hidden">
                    <div className="bg-black w-2"></div>
                    <h2 className="text-3xl font-bold leading-tight font-[Orbitron,sans-serif] tracking-widest uppercase">
                        Our <br />Advanteges
                    </h2>
                </div>

                <h2 className="text-3xl font-bold leading-tight font-[Orbitron,sans-serif] tracking-widest uppercase md:block hidden">
                    Our <br />Advanteges
                </h2>

                <div className="items mb-5">
                    {/* 1 */}
                    <div className="flex items-center gap-10 mb-4">
                        <div className="rounded-full sm:-ml-2 -ml-1 bg-black sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2"></div>
                        <h3 className="text-3xl font-bold font-generalsans">24/7 Support</h3>
                    </div>
                    <div className="flex gap-10">
                        <div className="bg-black w-1"></div>
                        <div className="bg-white font-semibold shadow-xl p-5 rounded-lg">Round-the-clock IT support to address any technical issues whenever they arise.
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex items-center gap-10 mb-4 mt-6">
                        <div className="rounded-full sm:-ml-2 -ml-1 bg-black sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2"></div>
                        <h3 className="text-3xl font-bold font-generalsans">Proactive Maintenance
                        </h3>
                    </div>
                    <div className="flex gap-10">
                        <div className="bg-black w-1"></div>
                        <div className="bg-white font-semibold shadow-xl p-5 rounded-lg">Regular maintenance and updates to prevent problems and ensure your systems run smoothly.
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex items-center gap-10 mb-4 mt-6">
                        <div className="rounded-full sm:-ml-2 -ml-1 bg-black sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2"></div>
                        <h3 className="text-3xl font-bold font-generalsans">IT Consulting</h3>
                    </div>
                    <div className="flex gap-10">
                        <div className="bg-black w-1"></div>
                        <div className="bg-white font-semibold shadow-xl p-5 rounded-lg">Expert advice and strategic planning to help you make informed decisions about your IT infrastructure.
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="flex items-center gap-10 mb-4 mt-6">
                        <div className="rounded-full sm:-ml-2 -ml-1 bg-black sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2"></div>
                        <h3 className="text-3xl font-bold font-generalsans">Cybersecurity Services</h3>
                    </div>
                    <div className="flex gap-10">
                        <div className="bg-black w-1"></div>
                        <div className="bg-white font-semibold shadow-xl p-5 rounded-lg">Protect your business from cyber threats with our partner third party security solutions, including firewalls, antivirus, and threat detection.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="shadow-2xl m-10 lg:m-28 flex flex-col lg:flex-row rounded-xl">
                <div className="flex-1">
                    <img src="./images/cta3.png" alt="CO2 Labs Image" className="w-full" />
                </div>
                <div className="flex-1 flex flex-col justify-center pl-10">
                    <h1 className="text-3xl font-bold mb-4 mt-5">We’re Here For You</h1>
                    <p className="mb-6">Trust CO2 Labs for dependable IT support that empowers your business. Reach out to us today to discover how we can support your IT needs.</p>
                    <button className="buttonQuote text-white py-2 px-6 w-48 font-semibold rounded mb-5">Get it support<i class='fas fa-arrow-right'></i></button>
                </div>
            </div>
        </section>



        </>
    );
}
