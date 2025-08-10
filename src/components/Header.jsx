import React, { useState } from 'react';
import { FaUser, FaClipboardList, FaCode, FaTools, FaDownload } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black text-white p-4 fixed w-full z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <a
                    href="#home"
                    className="text-lg font-bold flex items-center gap-1 hover:text-emerald-400 transition duration-300"
                >
                    🧑‍💻 Portfolio
                </a>

                <nav className="hidden md:flex space-x-6 items-center">
                    <a href="#about" className="flex items-center hover:text-emerald-400 transition">
                        <FaUser className="mr-1" /> About
                    </a>
                    <a href="#skills" className="flex items-center hover:text-emerald-400 transition">
                        <FaCode className="mr-1" /> Skills
                    </a>
                    <a href="#projects" className="flex items-center hover:text-emerald-400 transition">
                        <FaClipboardList className="mr-1" /> Projects
                    </a>
                    <a href="#contact" className="flex items-center hover:text-emerald-400 transition">
                        <FaTools className="mr-1" /> Contact
                    </a>
                    <a
                        href="/files/Resume.pdf"
                        download
                        className="flex items-center hover:text-emerald-400 transition"
                    >
                        <FaDownload className="mr-1" /> Download Resume
                    </a>
                </nav>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden bg-black overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="p-4 flex flex-col items-center">
                    <a href="#about" className="flex items-center py-2 hover:text-emerald-400">
                        <FaUser className="mr-1" /> About
                    </a>
                    <a href="#projects" className="flex items-center py-2 hover:text-emerald-400">
                        <FaClipboardList className="mr-1" /> Projects
                    </a>
                    <a href="#skills" className="flex items-center py-2 hover:text-emerald-400">
                        <FaCode className="mr-1" /> Skills
                    </a>
                    <a href="#contact" className="flex items-center py-2 hover:text-emerald-400">
                        <FaTools className="mr-1" /> Contact
                    </a>
                    <a href="/files/Resume.pdf" download className="flex items-center py-2 hover:text-emerald-400">
                        <FaDownload className="mr-1" /> Download Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
