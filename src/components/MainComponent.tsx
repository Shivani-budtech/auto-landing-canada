import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "../style.css";
import "../font.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import CustomerStories from "./CustomerStories.tsx";
import ContactUS from "./ContactUs.tsx";
import Blogs from "./Blogs.tsx";
import BlogDetail from './BlogDetail.tsx';
import Faqs from './Faqs.tsx';
import Calculator from './Calculator.tsx';

function MainComponent() {
  return (
    <Router>
      <div className="auto-lending-app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer_stories" element={<CustomerStories />} />
          <Route path="/contact_us" element={<ContactUS />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default MainComponent;
