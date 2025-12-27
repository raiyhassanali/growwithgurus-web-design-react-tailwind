import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroWithLoginForm from '../components/HeroWithLoginForm';
import TopicPills from '../components/TopicPills';
import CommunityCTA from '../components/CommunityCTA';

const Home = () => {
    return (
        <div className="bg-black min-h-screen font-sans">
            <Navbar />
            <HeroWithLoginForm />
            <TopicPills />
            <CommunityCTA />
            <Footer />
        </div>
    );
};

export default Home;
