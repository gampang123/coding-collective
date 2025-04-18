export default function Home() {
    return (
        <div
            className="header relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-12 lg:py-0 min-h-screen bg-no-repeat bg-right bg-contain"
            style={{
                backgroundImage: 'url(./images/backdrop.png)',
                backgroundSize: '30%',
            }}
        >
            {/* Kiri: Teks dan tombol */}
            <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}
                 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-4 text-gray-800 leading-tight">
                    Where Code Meets
                </h1>
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}
                 className="buttonPrimary inline-block text-white text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-4 leading-tight pr-2 pl-2">
                    Creativity
                </h1>
                <p className="header font-generalsans mb-6 font-medium text-base sm:text-lg">
                    Harnessing the power of our Coding Collective to build solutions for your business needs.
                </p>
                <button className="buttonPrimary font-generalsans font-medium text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    Get a free consult
                </button>
            </div>

            {/* Kanan: Gambar utama */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-10 lg:mb-0 z-10">
                <img
                    src="./images/heroimg.png"
                    alt="Hero"
                    className="w-48 sm:w-64 md:w-80 lg:w-96 max-w-full h-auto rounded-xl mr-14"
                />
            </div>
        </div>
    );
}
