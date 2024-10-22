import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import AboutFeatures from './AboutFeatures/index.tsx';
import AboutUs from './AboutUs/index.tsx';
import CounterSec from './CounterSec/index.tsx';
import AboutBanner from './AboutBanner/index.tsx';
import Testimonials from './Testimonials/index.tsx';

function About() {
    return (
        <div className='about-page'>
            <InternalHeader />
            <AboutFeatures />
            <AboutUs />
            <CounterSec />
            <AboutBanner />
            <Testimonials />
        </div>
    );
}

export default About;
