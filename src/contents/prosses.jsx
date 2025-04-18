export default function ProcessSection() {
    const steps = [
        {
            title: "Assessment",
            subtitle: "& Insight Gathering",
            content: (
                <>
                    <p>Our process begins with an initial consultation to gather insights into your business needs and challenges. We work closely with your team to understand your objectives and gather all necessary information.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Initial consultation meetings</li>
                        <li>Gathering business and technical requirements</li>
                    </ul>
                </>
            ),
            bg: "bg-[#f0ede6]",
        },
        {
            title: "Customization",
            subtitle: "& Strategic Planning",
            content: (
                <>
                    <p>We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Strategic planning sessions</li>
                        <li>Solution design and prototyping</li>
                        <li>Resource and timeline planning</li>
                        <li>Risk assessment and mitigation planning</li>
                    </ul>
                </>
            ),
            bg: "bg-[#adb6b6]",
        },
        {
            title: "Execution",
            subtitle: "& Lifecycle Management",
            content: (
                <>
                    <p>We execute the strategic plan and manage the entire solution lifecycle, from implementation to optimization. This ensures the solutions are effectively integrated and continuously deliver value.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Implementation of the strategic plan</li>
                        <li>Solution deployment and integration</li>
                        <li>Lifecycle management and support</li>
                        <li>Continuous performance evaluation and optimization</li>
                    </ul>
                </>
            ),
            bg: "bg-[#f0ede6]",
        },
    ];

    return (
        <section className="px-4 md:px-8 lg:px-16 py-16">
            <div className="text-center mb-12">
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }} className="font-bold text-3xl sm:text-4xl lg:text-5xl">ACE</h1>
                <p className="font-generalsans font-semibold text-lg sm:text-xl lg:text-2xl">Methodology for Strategic Consulting</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`group relative p-6 rounded-xl shadow-md transition-all duration-300 ${step.bg}`}
                    >
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold">{step.title}</h2>
                            <p className="text-xl text-black">{step.subtitle}</p>
                        </div>

                        <div className="font-generalsans text-base pt-4 max-h-0 overflow-hidden group-hover:max-h-[500px] transition-all duration-500 ease-in-out">
                            {step.content}
                        </div>

                        <svg
                            className="w-5 h-5 text-gray-600 mt-4 transform transition-transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                ))}
            </div>
        </section>
    );
}