import React, { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import HeaderMenuMobile from './headerMenuMobile';

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDropdown = () => setShowDropdown(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 lg:px-16 flex justify-between items-center transition-shadow duration-300 ${isScrolled ? 'shadow-md bg-white' : ''}`}>
            {/* Logo */}
            <div className="w-auto flex-shrink-0">
                <img className="w-16 md:w-18" src="./images/logo.png" alt="CO2 Lab" />
            </div>

            {/* Hamburger Icon (Mobile Only) */}
            <div className="lg:hidden">
                <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-center relative">
                <div className="relative">
                    <button
                        className="font-generalsans font-medium text-xl flex items-center gap-1"
                        onClick={toggleDropdown}
                    >
                        Our Service
                        <i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'} text-sm`}></i>
                    </button>
                    {showDropdown && <DropdownMenu />}
                </div>

                <a href="#about" className="font-generalsans font-medium text-xl">About Us</a>
                <a href="#portofolio" className="font-generalsans font-medium text-xl">Portofolio</a>
                <a href="#contact" className="font-generalsans font-medium text-xl">Contact</a>
            </nav>

            {/* Button */}
            <div className="hidden lg:block">
                <button className="buttonPrimary text-white rounded-md py-2 px-4 font-medium text-xl font-generalsans shadow-md hover:scale-105 transition-transform">
                    Get Started Today!
                </button>
            </div>

            {/* Mobile Menu */}
            <HeaderMenuMobile show={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
        </header>
    );
}
