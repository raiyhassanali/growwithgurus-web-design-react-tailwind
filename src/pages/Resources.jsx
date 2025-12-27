import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ResourcesHeader from '../components/ResourcesHeader';
import ResourcesGrid from '../components/ResourcesGrid';
import FAQSection from '../components/FAQSection';
import TopicPills from '../components/TopicPills';

const Resources = () => {
    return (
        <div className="bg-black min-h-screen font-sans">
            <Navbar />
            <Breadcrumb />
            <ResourcesHeader />
            <ResourcesGrid />
            <FAQSection />
            <TopicPills />
            <Footer />
        </div>
    );
};

export default Resources;
