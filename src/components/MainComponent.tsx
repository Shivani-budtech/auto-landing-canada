import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "../style.css";
import "../font.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";


function MainComponent() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default MainComponent;
