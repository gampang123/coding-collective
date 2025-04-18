// src/components/HeaderMenuMobile.jsx
import React from 'react';
import { X } from 'lucide-react'; // pastikan lucide-react sudah diinstal

export default function HeaderMenuMobile({ show, onClose }) {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
            ${show ? 'translate-x-0' : '-translate-x-full'}`}
        >
            {/* Close button */}
            <div className="flex justify-end p-4">
                <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
                    <X size={24} />
                </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-4 px-6">
                <span className="text-sm text-gray-500 font-semibold uppercase">Our Services</span>
                <a href="#maintenance" onClick={onClose} className="hover:underline">Website Maintenance</a>
                <a href="#development" onClick={onClose} className="hover:underline">Website & App Development</a>
                <a href="#support" onClick={onClose} className="hover:underline">IT Support</a>
                <a href="#ai" onClick={onClose} className="hover:underline">3rd Party AI Solution</a>

                <hr className="my-2" />

                <a href="#about" onClick={onClose}>About Us</a>
                <a href="#portofolio" onClick={onClose}>Portfolio</a>
                <a href="#contact" onClick={onClose}>Contact Us</a>

                <button
                    className="mt-6 bg-[rgb(21,49,71)] text-white rounded-md py-2 px-4 font-medium shadow hover:scale-105 transition"
                    type="button"
                >
                    Get Started Today!
                </button>
            </nav>
        </div>
    );
}
