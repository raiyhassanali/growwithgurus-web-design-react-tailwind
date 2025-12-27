import React, { useState } from 'react';
import { User, Lock, Chrome, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroWithLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="bg-black min-h-screen pt-24 pb-16 px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fb923c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* Left Column */}
            <div className="relative z-10">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Welcome to <br />
                    <span className="text-orange-500">Grow With Gurus</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                    Pakistan's most trusted platform for MDCAT preparation and international scholarship guidance. Join thousands of students achieving their dreams.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                    <Link to="/register" className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all text-base font-semibold shadow-xl shadow-orange-500/30 inline-flex items-center gap-2">
                        Start Learning Today
                    </Link>
                    <Link to="/resources" className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full hover:bg-orange-500/10 transition-all text-base font-semibold inline-flex items-center gap-2">
                        Browse All Resources
                    </Link>
                </div>

                {/* Hero Image Placeholder */}
                <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-800 bg-gray-900 aspect-video relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-white font-bold text-lg">Achieve Your Dreams</p>
                        <p className="text-orange-500 text-sm">Join the success story</p>
                    </div>
                    {/* Replace with actual image */}
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">
                        [Hero Image: Pakistani students studying]
                    </div>
                </div>
            </div>

            {/* Right Column - Login Card */}
            <div className="relative z-10 w-full max-w-md mx-auto lg:ml-auto">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-8 shadow-2xl shadow-orange-500/10 backdrop-blur-xl">
                    <div className="mb-6">
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-wider border border-orange-500/50 px-2 py-1 rounded mb-2 inline-block">MDCAT 2025</span>
                        <h2 className="text-2xl font-bold text-white">Access Your Learning Dashboard</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute left-4 top-3.5 text-gray-500" size={20} />
                                <input
                                    type="text"
                                    placeholder="Email or Phone Number"
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-3.5 text-gray-500" size={20} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all mt-6 shadow-lg shadow-orange-500/30">
                            Login to Dashboard
                        </button>

                        <div className="text-center mt-4">
                            <Link to="/forgot-password" className="text-orange-500 hover:text-orange-400 text-sm">
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="relative my-6 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-800"></div>
                            </div>
                            <span className="relative bg-gray-900 px-4 text-sm text-gray-500">or continue with</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="bg-white text-gray-900 px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-sm">
                                <Chrome size={18} /> Google
                            </button>
                            <button type="button" className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm">
                                <div className="font-bold">f</div> Facebook
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroWithLoginForm;
