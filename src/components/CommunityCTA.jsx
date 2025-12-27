import React from 'react';
import { Users, MessageCircle } from 'lucide-react';

const CommunityCTA = () => {
    return (
        <div className="mx-6 lg:mx-12 my-16 bg-gradient-to-br from-orange-50 via-white to-pink-50 py-16 px-6 lg:px-12 rounded-3xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:16px_16px] opacity-20 mask-image:linear-gradient(to_bottom,black,transparent)"></div>

            {/* Chat Bubbles Decoration */}
            <div className="hidden lg:block absolute top-20 right-32 bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-md text-gray-700 text-sm animate-pulse">
                Can I get info about scholarships?
            </div>
            <div className="hidden lg:block absolute bottom-32 right-20 bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-md text-gray-700 text-sm animate-bounce" style={{ animationDuration: '3s' }}>
                Are you guys offering free courses?
            </div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500 text-orange-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    <Users size={14} />
                    COMMUNITY
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Join Our Community Where <br /> Dreams Become Reality
                </h2>

                <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                    Join our WhatsApp community — connect with fellow MDCAT aspirants, share study tips, get instant doubt resolution, and stay updated on scholarship deadlines.
                </p>

                <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all text-base font-semibold shadow-xl shadow-orange-500/30 inline-flex items-center gap-2">
                    <MessageCircle size={20} />
                    Join WhatsApp Community
                </button>
            </div>
        </div>
    );
};

export default CommunityCTA;
