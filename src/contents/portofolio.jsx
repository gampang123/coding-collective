export default function Portofolio() {
    const projects = [
        {
            title: "AOTC Cosmetics",
            image: "./images/portfolio.png",
            link: "https://aotc-cosmetics.com",
        },
        {
            title: "Nosh kitchen Website",
            image: "./images/portfolio-1.png",
            link: "https://noshkitchen.com.sg",
        },
        {
            title: "Michelah Event Organizer Singapore",
            image: "./images/portfolio-2.png",
            link: "https://michelah-events.com",
        },
        {
            title: "Joywaltzstudio Academy",
            image: "./images/portfolio-3.png",
            link: "https://joywaltzstudio.com",
        },
        {
            title: "Octopay Payment",
            image: "./images/portfolio-4.png",
            link: "https://qpay.com",
        },
    ];

    return (
        <section className="buttonPrimary py-16 px-4 sm:px-6 lg:px-16 text-center">
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}
                 className="text-3xl lg:text-start text-white sm:text-4xl lg:text-5xl font-orbitron font-bold mb-10 leading-tight">
                    Our Portofolio
                </h1>            
                <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center px-10">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-white group"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-72 h-48 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                            <p className="mt-4 text-center text-white font-semibold">{project.title}</p>
                        </a>
                    ))}
                </div>
        </section>
    );
}
