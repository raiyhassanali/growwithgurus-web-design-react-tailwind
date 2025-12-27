import React, { useState } from 'react';
import { Plus, Minus, User } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-gray-900 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-lg">{question}</h3>
                <span className="text-orange-500">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </div>
            {isOpen && (
                <p className="text-gray-400 mt-4 leading-relaxed animate-fadeIn">
                    {answer}
                </p>
            )}
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            question: "How do I access the study materials after enrolling?",
            answer: "Once you enroll in any resource, you'll get instant access to all materials through your student dashboard. You can watch videos, download notes, and take practice tests anytime."
        },
        {
            question: "Are the mock tests similar to the actual MDCAT exam?",
            answer: "Yes! Our mock tests are designed by MDCAT toppers and experienced instructors. They mirror the actual exam pattern, difficulty level, and time constraints to give you realistic practice."
        },
        {
            question: "Do you offer refunds if I'm not satisfied?",
            answer: "We offer a 7-day money-back guarantee. If you're not happy with the resource quality within the first week, contact our support team for a full refund."
        },
        {
            question: "Can I get personalized guidance for scholarship applications?",
            answer: "Absolutely! Our scholarship guidance package includes one-on-one mentorship, SOP reviews, and interview preparation tailored to your target universities and programs."
        }
    ];

    return (
        <section className="bg-black py-16 px-6 lg:px-12">
            <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/50 text-orange-500 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    FEATURED TOPICS
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Find quick answers to common questions about MDCAT preparation, scholarships, and our learning resources.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-500/30 rounded-2xl p-8 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                <p className="text-base text-gray-700 mb-6">Contact us! We're here to help you succeed.</p>

                <div className="flex justify-center -space-x-4 mb-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-500 text-xs">
                            <User size={16} />
                        </div>
                    ))}
                </div>

                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all font-semibold shadow-lg shadow-orange-500/30 inline-flex items-center gap-2">
                    Talk to Our Team
                </button>
            </div>
        </section>
    );
};

export default FAQSection;
