import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const OfferingsGrid = () => {
    const offerings = [
        {
            title: "Complete MDCAT Preparation",
            description: "Learn Biology, Chemistry, Physics, and English. Master every topic with video lectures, detailed notes, and thousands of practice questions.",
            icon: <BookOpen className="text-orange-500" size={32} />,
            badge: "FEATURED", badgeColor: "bg-orange-500"
        },
        {
            title: "Scholarship Application Guidance",
            description: "Get expert help with scholarship research, SOP writing, interview preparation, and application reviews for fully-funded programs.",
            icon: <Award className="text-orange-500" size={32} />,
            badge: "POPULAR", badgeColor: "bg-orange-500"
        },
        {
            title: "MDCAT Strategy Workshops",
            description: "Intensive bootcamps covering time management, high-yield topics, exam strategies, and mental health for test day success.",
            icon: <Users className="text-orange-500" size={32} />,
            badge: "NEW", badgeColor: "bg-orange-500"
        }
    ];

    return (
        <section className="bg-black py-16 px-6 lg:px-12">
            <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/50 text-orange-500 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    WE OFFER
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                    Master Skills That Define Your Medical Future
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                    From MDCAT prep to scholarship applications — everything you need through structured, expert-designed programs for real-world success.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offerings.map((offering, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all group relative p-8">
                        <div className={`absolute top-4 right-4 ${offering.badgeColor} text-white px-4 py-1 rounded-full text-xs font-bold`}>
                            {offering.badge}
                        </div>
                        <div className="bg-orange-500/10 w-fit p-4 rounded-xl mb-6">
                            {offering.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{offering.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{offering.description}</p>
                        <button className="text-orange-500 font-semibold hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                            Learn More →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OfferingsGrid;
