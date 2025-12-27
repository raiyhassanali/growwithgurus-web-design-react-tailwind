import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import RegisterSection from '../components/RegisterSection';
import FAQSection from '../components/FAQSection';
import CommunityCTA from '../components/CommunityCTA';

const Register = () => {
    return (
        <div className="bg-black min-h-screen font-sans">
            <Navbar />
            <Breadcrumb />
            <RegisterSection />
            <FAQSection />
            <CommunityCTA />
            <Footer />
        </div>
    );
};

export default Register;
