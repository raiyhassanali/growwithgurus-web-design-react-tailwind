import React from 'react';

const BrandStoryCard = () => {
    return (
        <section className="bg-black py-16 px-6 lg:px-12">
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/30 rounded-3xl p-12 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="text-center lg:text-left">
                    <h2 className="text-8xl font-black text-orange-500 mb-4 tracking-tighter">GWG</h2>
                    <p className="text-2xl font-bold text-white tracking-widest">GROW WITH GURUS</p>
                </div>

                {/* Right Column */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">About Grow With Gurus</h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                        Grow With Gurus is Pakistan's most trusted learning platform for MDCAT preparation and international scholarship guidance. We combine expert teaching, proven test-taking strategies, and real-world career insights to help ambitious students achieve their medical dreams.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed">
                        Our mission is simple: create opportunities, unlock potential, and shape the future of Pakistan's healthcare professionals. Whether you're targeting top medical colleges in Pakistan or seeking fully-funded scholarships abroad, we provide the expert guidance and comprehensive resources you need to succeed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BrandStoryCard;
