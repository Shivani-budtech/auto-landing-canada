import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "../style.css";
import '../responsive.css';
import "../font.css";
import Header from "./Header.tsx";
import MobileHeader from './MobileHeader.tsx';
import Footer from "./Footer.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import CustomerStories from "./CustomerStories.tsx";
import ContactUS from "./ContactUs.tsx";
import Blogs from "./Blogs.tsx";
import BlogDetail from './BlogDetail.tsx';
import Faqs from './Faqs.tsx';
import Calculator from './Calculator.tsx';
import ApplyNow from './ApplyNow.tsx';
import VerificationCode from './VerificationCode.tsx';
import PowerSports from './PowerSports.tsx';
import HowItWorks from './HowItWorks.tsx';
import PreApply from './PreApply.tsx';
import app from './firebaseAuth.tsx';
import PrivacyPolicy from './PrivacyPolicy.tsx';
import TermsOfUSe from './TermsOfUSe.tsx';

function AppContent({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen("closed");
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.title = "Auto Lending Canada – Fast & Affordable Car Loans for All Credit Types";
  }, []);

  return (
    <div className="auto-lending-app">
      <script src="http://localhost:8097"></script>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customer_stories" element={<CustomerStories />} />
        <Route path="/contact_us" element={<ContactUS />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/apply" element={<PreApply />} />
        <Route path="/verification_code" element={<VerificationCode />} />
        <Route path="/power_sports" element={<PowerSports />} />
        <Route path='/how_works' element={<HowItWorks />} />
        <Route path='/pre_apply' element={<PreApply />} />
        <Route path='/privacy_policy' element={<PrivacyPolicy />} />
        <Route path='/terms_of_user' element={<TermsOfUSe />} />
      </Routes>

      <Footer />
    </div>
  );
}

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState("closed");

  return (
    <Router basename='/alc-app'>
      <AppContent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Router>
  );
}

export default MainComponent;
