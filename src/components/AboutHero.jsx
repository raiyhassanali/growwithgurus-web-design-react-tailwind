import React from 'react';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

const AboutHero = () => {
    const features = [
        { icon: <BookOpen className="text-orange-500" size={24} />, title: "Complete Study Material", desc: "Master every topic with expert notes and practice tests." },
        { icon: <Award className="text-orange-500" size={24} />, title: "Certificate of Excellence", desc: "Get recognized credentials that boost your profile." },
        { icon: <Users className="text-orange-500" size={24} />, title: "Expert Mentorship", desc: "Learn from top MDCAT scorers and experienced instructors." },
        { icon: <Globe className="text-orange-500" size={24} />, title: "Global Opportunities", desc: "Connect with scholarship programs and study abroad options." }
    ];

    return (
        <section className="bg-black py-16 px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Empowering The Next Generation of Pakistani Medical Professionals
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                    Industry-driven learning designed to turn MDCAT aspirants into skilled medical professionals — right from Pakistan to the world.
                </p>
            </div>

            {/* Right Column */}
            <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 p-6 rounded-xl">
                        <div className="bg-orange-500/10 p-4 rounded-xl mb-3 w-fit">
                            {feature.icon}
                        </div>
                        <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutHero;
