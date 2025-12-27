import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { label: "HOME", link: "/" },
        { label: "ABOUT US", link: "/about" },
        { label: "MDCAT PREP", link: "/mdcat" },
        { label: "SCHOLARSHIPS", link: "/scholarships", dropdown: true },
        { label: "WORKSHOPS", link: "/workshops" },
        { label: "COMMUNITY", link: "/community" },
        { label: "CONTACT US", link: "/contact" }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm px-6 lg:px-12 py-4 border-b border-orange-500/20">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">
                        GROW WITH <span className="text-orange-500">GURUS</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((item, index) => (
                        <div key={index} className="relative group">
                            <Link
                                to={item.link}
                                className="text-white hover:text-orange-500 transition-colors text-sm font-medium flex items-center gap-1"
                            >
                                {item.label}
                                {item.dropdown && <ChevronDown size={14} />}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        to="/login"
                        className="border border-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-500/10 transition-all text-sm font-medium"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all text-sm font-medium shadow-lg shadow-orange-500/30"
                    >
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="lg:hidden text-white">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden mt-4 pb-4 bg-black/95 absolute top-16 left-0 w-full px-6 border-b border-orange-500/20">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="text-white hover:text-orange-500 transition-colors text-sm font-medium py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-4">
                            <Link
                                to="/login"
                                className="border border-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-500/10 transition-all text-sm font-medium text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all text-sm font-medium shadow-lg shadow-orange-500/30 text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
