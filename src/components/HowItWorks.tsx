import React from 'react';
import { Helmet } from "react-helmet-async";
import InternalHeader from './InternalHeader/index.tsx';
import StepsTOFollow from './StepsToFollow/index.tsx';
import BottomBanner from "./BottomBanner/index.tsx";
import HowWorksGrid from './HowWorksGrid/index.tsx';
import HowWorksBanner from './HowWorksBanner/index.tsx';

function HowItWorks() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Get the Best New Car Finance Rates & Car Financing in Canada</title>
                <meta name="description" content="Compare new car finance rates and find the best car financing in Canada. Apply for an online car loan today and get fast approval with competitive rates!" />
                <meta name="keywords" content="Best Car Loans Canada, Lowest Car Finance Rates Canada, New Car Finance Rates, Car Financing in Canada, Online Car Loan, Best Auto Loan Rates in Canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://autolendingcanada.ca/how-it-works" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Get the Best New Car Finance Rates & Car Financing in Canada" />
                <meta property="og:description" content="Compare new car finance rates and find the best car financing in Canada. Apply for an online car loan today and get fast approval with competitive rates!" />
                <meta property="og:url" content="http://autolendingcanada.ca/how-it-works" />
            </Helmet>

            <section className='how-works-page'>
                <InternalHeader />
                <StepsTOFollow />
                <HowWorksGrid />
                <HowWorksBanner />
            </section>
        </>
    );
}

export default HowItWorks;
