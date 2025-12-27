import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AboutHero from '../components/AboutHero';
import BrandStoryCard from '../components/BrandStoryCard';
import OfferingsGrid from '../components/OfferingsGrid';
import CommunityCTA from '../components/CommunityCTA';

const About = () => {
    return (
        <div className="bg-black min-h-screen font-sans">
            <Navbar />
            <Breadcrumb />
            <AboutHero />
            <BrandStoryCard />
            <OfferingsGrid />
            <CommunityCTA />
            <Footer />
        </div>
    );
};

export default About;
