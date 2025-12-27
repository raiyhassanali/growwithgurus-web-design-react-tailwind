import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const ResourcesHeader = () => {
    return (
        <section className="bg-black py-8 px-6 lg:px-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                All Learning Resources
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl">
                Explore our complete collection of MDCAT prep materials, scholarship guidance, and career resources designed to help you succeed.
            </p>

            <button className="bg-gray-900 border border-orange-500/30 text-white px-6 py-3 rounded-lg hover:bg-orange-500/10 hover:border-orange-500 transition-all inline-flex items-center gap-2 font-medium">
                <SlidersHorizontal size={18} />
                Filter
            </button>
        </section>
    );
};

export default ResourcesHeader;
