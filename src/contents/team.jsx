export default function Team() {
    const team = [
        {
            name: "Jay Chen",
            position: "CEO",
            image: "./images/profile1.jpeg",
            description: `Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his businesses by delivering exceptional service to renowned international brands like Huawei, Coca-Cola, and GlaxoSmithKline. CO2 Labs provides a solutions-based approach to champion human resource and outsourcing through strategic consultation and meticulously planned placements.`,
        },
        {
            name: "Alune",
            position: "Development Project Manager",
            image: "./images/profile2.jpeg",
            description: `With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget. Alune excels at fostering collaboration across cross-functional teams, ensuring that projects align with client objectives and business goals. Her dedication to excellence and passion for innovation make her a driving force behind the success of every project she leads.`,
        },
        {
            name: "Ron",
            position: "Business Development Lead",
            image: "./images/profile3.jpeg",
            description: `With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have expanded market reach and increased revenue for both emerging and established companies. Known for his ability to identify new opportunities and forge lasting relationships, Ron excels in creating tailored solutions that meet client needs and align with business goals through thoughtful solutioning.`,
        },
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-16 text-center">
            <h1
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                className="text-3xl sm:text-4xl lg:text-start lg:text-5xl font-orbitron font-bold mb-12 leading-tight"
            >
                OUR TEAM
            </h1>
            <div className="max-w-7xl mx-auto mt-28">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((person, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-md rounded-2xl pt-20 pb-10 mb-20 px-6 text-center flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="absolute -top-16 w-32 h-32 rounded-full overflow-hidden shadow-md">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <h3 className="text-xl font-generalsans font-bold mt-4">{person.name}</h3>
                            <p className="font-semibold font-generalsans mb-4">{person.position}</p>
                            <p className="text-sm font-italic font-semibold italic text-justify">
                                {person.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
