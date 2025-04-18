export default function ContactUs() {
    return (
        <section className="bg-[#f9f8f4] py-16 px-4 sm:px-6 lg:px-16">
            <h1
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-10"
            >
                Contact Us
            </h1>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold mb-6">Hi there, how can we help?</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-md bg-gray-100"
                        />
                        <input
                            type="email"
                            placeholder="Yourmail@example.com"
                            className="w-full p-3 rounded-md bg-gray-100"
                        />
                        <textarea
                            placeholder="Ask Our About Services"
                            rows="4"
                            className="w-full p-3 rounded-md bg-gray-100"
                        ></textarea>

                        <div className="mt-4">
                            <p className="mb-2 font-semibold">Where Did You Hear About Us?</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                {["Linkedin", "Instagram", "Job Ads", "Events and Seminars", "Other"].map((label, idx) => (
                                    <label key={idx} className="flex items-center gap-2">
                                        <input type="radio" name="source" value={label.toLowerCase()} />
                                        {label}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 bg-[#0d2d3e] hover:bg-[#123c50] text-white px-6 py-2 rounded-md"
                        >
                            Send
                        </button>
                    </form>
                </div>

                <div className="w-full h-auto rounded-xl overflow-hidden shadow-md">
                    <iframe
                        title="Map to PT Kode Kolektif Indonesia"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8207418395223!2d110.37980897500515!3d-7.808792692211639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578b7969cbe3%3A0x333ed4b3e5f48909!2sPT%20Kode%20Kolektif%20Indonesia!5e0!3m2!1sid!2sid!4v1744971259578!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
