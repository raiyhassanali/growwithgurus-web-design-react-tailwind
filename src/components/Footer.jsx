import React from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-pink-100 via-orange-50 to-white py-16 px-6 lg:px-12 text-gray-800">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Branding Section */}
                <div>
                    <Link to="/" className="text-4xl font-black text-orange-500 mb-4 block">GWG</Link>
                    <h3 className="text-gray-900 font-bold text-lg mb-4">FREE Premium MDCAT Resources</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        We believe no student should be left behind. Enjoy world-class MDCAT preparation & scholarship guidance — 100% FREE.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all"><Facebook size={20} /></a>
                        <a href="#" className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all"><Twitter size={20} /></a>
                        <a href="#" className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all"><Youtube size={20} /></a>
                        <a href="#" className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Popular Resources */}
                <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-6">Popular Resources</h3>
                    <ul className="space-y-3">
                        <li><Link to="/resources/mdcat-biology" className="text-gray-700 hover:text-orange-500 transition-all text-sm">MDCAT Biology - Complete Course</Link></li>
                        <li><Link to="/resources/mdcat-chemistry" className="text-gray-700 hover:text-orange-500 transition-all text-sm">MDCAT Chemistry - Full Guide</Link></li>
                        <li><Link to="/resources/mdcat-physics" className="text-gray-700 hover:text-orange-500 transition-all text-sm">MDCAT Physics Essentials</Link></li>
                        <li><Link to="/resources/scholarship-guide" className="text-gray-700 hover:text-orange-500 transition-all text-sm">Scholarship Application Guide</Link></li>
                        <li><Link to="/resources/study-abroad" className="text-gray-700 hover:text-orange-500 transition-all text-sm">Study Abroad Programs</Link></li>
                        <li><Link to="/resources/practice-mcqs" className="text-gray-700 hover:text-orange-500 transition-all text-sm">100,000+ Free Practice MCQs</Link></li>
                    </ul>
                </div>

                {/* About Community */}
                <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-6">About the Community</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Join our WhatsApp community — connect with learners, share ideas, and explore the latest in MDCAT preparation together.
                    </p>
                    <a href="#" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all font-semibold shadow-lg shadow-orange-500/30 inline-block text-sm">
                        Join Now
                    </a>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link to="/" className="text-gray-700 hover:text-orange-500 transition-all text-sm">Home</Link></li>
                        <li><Link to="/mdcat" className="text-gray-700 hover:text-orange-500 transition-all text-sm">MDCAT Prep & Labs</Link></li>
                        <li><Link to="/scholarships" className="text-gray-700 hover:text-orange-500 transition-all text-sm">Scholarship Guidance</Link></li>
                        <li><Link to="/resources" className="text-gray-700 hover:text-orange-500 transition-all text-sm">All Resources</Link></li>
                        <li><Link to="/why-free" className="text-gray-700 hover:text-orange-500 transition-all text-sm">Why Free</Link></li>
                        <li><Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-all text-sm">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-600 text-sm mt-12 pt-8 border-t border-gray-300">
                Copyright © 2025 Grow With Gurus LLC
            </div>
        </footer>
    );
};

export default Footer;
