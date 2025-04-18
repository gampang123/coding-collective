export default function ServicesSection() {
    const services = [
        {
            icon: 'fas fa-cogs',
            title: 'Website Maintenance',
            description: 'Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime..',
        },
        {
            icon: 'fas fa-code',
            title: 'Website & App Development',
            description: 'Transform your online presence with our custom website design solutions. From stunning visuals to seamless..',
        },
        {
            icon: 'fas fa-headset',
            title: 'IT Support',
            description: 'Experience peace of mind with our reliable IT support services. From troubleshooting to server maintenance..',
        },
        {
            icon: 'fas fa-robot',
            title: '3rd Party AI Solution',
            description: 'Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provid..',
        },
    ];

    return (
        <div className="buttonPrimary py-16 px-4 sm:px-6 lg:px-16">
            <h1 style={{ fontFamily: 'Orbitron, sans-serif' }} className="text-white font-bold text-3xl sm:text-4xl text-center sm:text-left mb-10">OUR SERVICES</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
                                <i className={`${service.icon} text-primary text-3xl`}></i>
                            </div>
                        </div>
                        <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                        <p className="text-gray-700 text-base font-medium mb-4">
                            {service.description}
                        </p>
                        <a href="#" className="font-medium text-sm text-black underline hover:text-blue-600">
                            View More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}