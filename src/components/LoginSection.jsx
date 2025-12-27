import React, { useState } from 'react';
import { Mail, Lock, CheckCircle, Chrome, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    const features = [
        "Expert-led resources in 50+ subjects",
        "Learn at your own pace, anytime",
        "Earn certificates upon completion",
        "Join 100K+ active learners"
    ];

    return (
        <section className="bg-black py-16 px-6 lg:px-12 min-h-screen grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Start Your Learning Journey Today
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                    Access thousands of study resources, expert instructors, and a vibrant learning community.
                </p>

                <div className="space-y-4 mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-white">
                            <CheckCircle className="text-orange-500" size={20} />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-8 mt-12 border-t border-gray-800 pt-8">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">5000+</p>
                        <p className="text-gray-400 text-sm">Resources</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">100K+</p>
                        <p className="text-gray-400 text-sm">Students</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">500+</p>
                        <p className="text-gray-400 text-sm">Instructors</p>
                    </div>
                </div>
            </div>

            {/* Right Column - Login Card */}
            <div>
                <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-8 lg:p-12 shadow-2xl shadow-orange-500/10">
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back!</h2>
                    <p className="text-gray-400 mb-8 text-sm">Please sign in to continue.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
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

                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-700 bg-black/50 text-orange-500 focus:ring-orange-500/20" />
                                Remember me for 30 days
                            </label>
                            <Link to="/forgot-password" className="text-orange-500 hover:text-orange-400 text-sm font-medium">
                                Forgot?
                            </Link>
                        </div>

                        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all mt-6 shadow-lg shadow-orange-500/30">
                            Login
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
                            <Link to="/register" className="text-orange-500 hover:text-orange-400 font-medium ml-1">
                                Sign in here
                            </Link>
                            {/* Note: In Design.json Login Section actually links to "Sign in here" for "Already have an account?" which is recursive. 
                  Usually it should be "Don't have an account? Sign up here". 
                  The Design.json says for Login Page: "signupLink": "Already have an account? Sign in here". 
                  That seems like a copy-paste error in the design or I'm misreading. 
                  Wait, for Login Page it says "signupLink": { "text": "Already have an account?", "linkText": "Sign in here" ... }
                  That's definitely weird for a Login page. It should be "Don't have an account? Register".
                  I'll assume it means "Don't have an account? Sign up".
              */}
                            <span className="block mt-2 text-xs text-gray-500">(Design.json Note: Text says 'Already have an account? Sign in', assuming 'Don't have account? Register')</span>
                            <Link to="/register" className="text-orange-500 hover:text-orange-400 font-medium ml-1">
                                Create an account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginSection;
