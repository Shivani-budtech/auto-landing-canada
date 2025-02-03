import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import StepsTOFollow from './StepsToFollow/index.tsx';
import BottomBanner from "./BottomBanner/index.tsx";
import HowWorksGrid from './HowWorksGrid/index.tsx';
import HowWorksBanner from './HowWorksBanner/index.tsx';

function HowItWorks() {
    return (
        <section className='how-works-page'>
            <InternalHeader />
            <StepsTOFollow />
            <HowWorksGrid />
            <HowWorksBanner />
        </section>
    );
}

export default HowItWorks;
