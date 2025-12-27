import React, { useState } from 'react';
import { Mail, Lock, User, Shield, Users, BarChart3, Cloud, Chrome, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register attempt:', { name, email, password });
    };

    const featureCards = [
        { icon: <Shield size={24} />, title: "Secure", desc: "End-to-end encryption" },
        { icon: <Users size={24} />, title: "Collaborative", desc: "Team-based workflows" },
        { icon: <BarChart3 size={24} />, title: "Analytics", desc: "Real-time insights" },
        { icon: <Cloud size={24} />, title: "Cloud-based", desc: "Access anywhere" }
    ];

    return (
        <section className="bg-black py-16 px-6 lg:px-12 min-h-screen grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Join Our Platform
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                    Create your account and unlock access to powerful tools and features designed to boost your learning.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-12">
                    {featureCards.map((card, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 p-6 rounded-xl">
                            <div className="bg-orange-500/10 p-4 rounded-xl mb-3 w-fit text-orange-500">
                                {card.icon}
                            </div>
                            <h3 className="text-white font-bold mb-1">{card.title}</h3>
                            <p className="text-gray-400 text-sm">{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-8 mt-12">
                    <div>
                        <p className="text-4xl font-bold text-white">5000+</p>
                        <p className="text-gray-400 text-sm">Resources</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">100K+</p>
                        <p className="text-gray-400 text-sm">Students</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">500+</p>
                        <p className="text-gray-400 text-sm">Instructors</p>
                    </div>
                </div>
            </div>

            {/* Right Column - Register Card */}
            <div>
                <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-8 lg:p-12 shadow-2xl shadow-orange-500/10">
                    <h2 className="text-3xl font-bold text-white mb-2">Get Started Now</h2>
                    <p className="text-gray-400 mb-8 text-sm">Join thousands of users who trust our platform</p>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-3.5 text-gray-500" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 text-gray-500" size={20} />
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-3.5 text-gray-500" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-300 text-xs"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="flex items-start gap-2 text-sm text-gray-400">
                                <input type="checkbox" className="mt-1 rounded border-gray-700 bg-black/50 text-orange-500 focus:ring-orange-500/20" />
                                <span>I agree to the <a href="#" className="text-orange-500 hover:text-orange-400">Terms of Service</a> and <a href="#" className="text-orange-500 hover:text-orange-400">Privacy Policy</a></span>
                            </label>
                        </div>

                        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all mt-6 shadow-lg shadow-orange-500/30">
                            Register Now
                        </button>

                        <div className="text-center text-gray-500 text-sm my-6">Or continue with</div>

                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                                <Chrome size={20} /> Google
                            </button>
                            <button type="button" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                                <Layers size={20} /> Microsoft
                            </button>
                        </div>

                        <p className="text-center text-gray-400 text-sm mt-6">
                            Already have an account?
                            <Link to="/login" className="text-orange-500 hover:text-orange-400 font-medium ml-1">
                                Sign in here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
