import React from 'react';
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="colorFooter text-white px-6 lg:px-16 py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-10">

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold">Let’s Grow With CO2 Labs</h2>
                    <p className="mt-2 mb-4">Get Exclusive Updates From Us</p>
                    <form className="flex flex-wrap items-center gap-2">
                        <input
                            type="email"
                            placeholder="Yourmail@example.com"
                            className="p-3 rounded-full w-64 bg-white text-black outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                <div>
                    <h3 className="font-bold mb-3">Services</h3>
                    <ul className="text-sm text-inherit space-y-1 list-disc">
                        <li>Web Maintenance</li>
                        <li>Web & App Development</li>
                        <li>IT Service</li>
                        <li>3rd Party AI Solution</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3">About</h3>
                    <ul className="text-sm text-inherit space-y-1 list-disc">
                        <li>Our Approach</li>
                        <li>Our Team</li>
                        <li>Our Portfolio</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3">Contact</h3>
                    <ul className="text-sm text-inherit space-y-1">
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> +65-8118-1595
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} /> info@co2labs.com
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin size={16} /> 100D Pasir Panjang Road
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p className="mb-4 md:mb-0">&copy; 2024 CO2 Labs. All Rights Reserved</p>

                <ul className="flex gap-6 list-none">
                    <li className="hover:underline cursor-pointer">FAQ</li>
                    <li className="hover:underline cursor-pointer">Terms & Policy</li>
                </ul>
            </div>

        </footer>
    );
}

