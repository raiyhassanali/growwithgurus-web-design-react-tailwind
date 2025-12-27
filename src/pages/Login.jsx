import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import LoginSection from '../components/LoginSection';
import FAQSection from '../components/FAQSection';
import CommunityCTA from '../components/CommunityCTA';

const Login = () => {
    return (
        <div className="bg-black min-h-screen font-sans">
            <Navbar />
            <Breadcrumb />
            <LoginSection />
            <FAQSection />
            <CommunityCTA />
            <Footer />
        </div>
    );
};

export default Login;
