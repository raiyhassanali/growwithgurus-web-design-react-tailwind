import React from 'react';

const ResourcesGrid = () => {
    const resources = [
        {
            title: "MDCAT Biology Mastery",
            description: "Complete biology coverage: Cell biology, genetics, human physiology, ecology. Video lectures, notes, and 1000+ practice MCQs.",
            badge: "FEATURED",
            students: "3,240",
            rating: "4.9",
            price: "PKR 5,000",
            cta: "Enroll Now"
        },
        {
            title: "MDCAT Chemistry Complete",
            description: "Organic, inorganic, and physical chemistry made simple. Expert strategies for solving tricky questions quickly.",
            badge: "POPULAR",
            students: "2,890",
            rating: "4.8",
            price: "PKR 5,000",
            cta: "Enroll Now"
        },
        {
            title: "MDCAT Physics Essentials",
            description: "Mechanics, electricity, waves, and modern physics. Concept clarity with numerical problem-solving techniques.",
            badge: "NEW",
            students: "1,560",
            rating: "5.0",
            price: "PKR 4,500",
            cta: "Enroll Now"
        },
        {
            title: "MDCAT English Excellence",
            description: "Grammar, vocabulary, comprehension passages. Master English section with proven techniques and daily practice.",
            badge: "HOT",
            students: "2,120",
            rating: "4.7",
            price: "PKR 3,000",
            cta: "Enroll Now"
        },
        {
            title: "Study Abroad Roadmap",
            description: "Compare scholarships in USA, UK, Germany, Canada, Australia. Country guides, visa requirements, and application timelines.",
            badge: "PREMIUM",
            students: "1,430",
            rating: "4.8",
            price: "PKR 4,000",
            cta: "Learn More"
        },
        {
            title: "MDCAT Mock Test Series",
            description: "20 full-length mock tests with detailed solutions. Timed practice, performance analytics, and weak area identification.",
            badge: "BESTSELLER",
            students: "4,120",
            rating: "5.0",
            price: "PKR 3,500",
            cta: "Start Testing"
        }
    ];

    return (
        <section className="bg-black py-8 px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all relative flex flex-col">
                        {/* Image Placeholder */}
                        <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
                            [Resource Image]
                        </div>

                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                            {resource.badge}
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white line-clamp-2">{resource.title}</h3>
                                <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-xs text-yellow-400 font-bold">
                                    ★ {resource.rating}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{resource.description}</p>

                            <div className="flex justify-between items-center text-xs text-gray-500 mb-4 border-t border-gray-800 pt-4">
                                <span>{resource.students} students</span>
                                <span className="font-bold text-white text-base">{resource.price}</span>
                            </div>

                            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all mt-auto">
                                {resource.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all text-base font-semibold shadow-xl shadow-orange-500/30">
                    Load More
                </button>
            </div>
        </section>
    );
};

export default ResourcesGrid;
