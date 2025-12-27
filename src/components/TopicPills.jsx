import React from 'react';
import { Book, FlaskConical, Zap, Award } from 'lucide-react';

const TopicPills = () => {
    const topics = [
        {
            text: "Biology and Biochemistry",
            icon: <Book size={18} />,
            style: "bg-gray-900 border border-orange-500/30 text-white hover:bg-orange-500/10 hover:border-orange-500"
        },
        {
            text: "Chemistry - Organic & Inorganic",
            icon: <FlaskConical size={18} />,
            style: "bg-gray-900 border border-orange-500/30 text-white hover:bg-orange-500/10 hover:border-orange-500"
        },
        {
            text: "Physics - Mechanics & Electricity",
            icon: <Zap size={18} />,
            style: "bg-gray-900 border border-orange-500/30 text-white hover:bg-orange-500/10 hover:border-orange-500"
        },
        {
            text: "Scholarship Applications",
            icon: <Award size={18} />,
            style: "bg-orange-500/20 border border-orange-500 text-orange-500 hover:bg-orange-500/30"
        }
    ];

    return (
        <section className="bg-black py-16 px-6 lg:px-12">
            {/* Topics Badge Section */}
            <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/50 text-orange-500 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    FEATURED TOPICS
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Popular Resources
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Explore the top resources trusted by thousands of Pakistani medical students preparing for MDCAT and international scholarships.
                </p>
            </div>

            {/* Topic Pills */}
            <div className="flex flex-wrap gap-4 justify-center">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className={`${topic.style} px-6 py-3 rounded-full transition-all cursor-pointer font-medium flex items-center gap-2`}
                    >
                        {topic.icon}
                        {topic.text}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopicPills;
