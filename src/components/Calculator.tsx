import React from 'react';
import { Helmet } from "react-helmet-async";
import InternalHeader from './InternalHeader/index.tsx';
import CalculatorBudget from './CalculatorBudget/index.tsx';

function Calculator() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Plan Your Budget with Car Loan Calculator | Auto Lending Canada</title>
                <meta name="description" content="Use our car loan calculator Canada to estimate payments and find the best financing options. Get pre-approved today and drive your dream car with ease!" />
                <meta name="keywords" content="car loan estimator canada, car loan calculator canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/car-loan-calculator" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Plan Your Budget with Car Loan Calculator | Auto Lending Canada" />
                <meta property="og:description" content="Use our car loan calculator Canada to estimate payments and find the best financing options. Get pre-approved today and drive your dream car with ease!" />
                <meta property="og:url" content="https://autolendingcanada.ca/car-loan-calculator" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@AutoLendingCA" />
                <meta name="twitter:title" content="Plan Your Budget with Car Loan Calculator | Auto Lending Canada" />
                <meta name="twitter:description" content="Use our car loan calculator Canada to estimate payments and find the best financing options. Get pre-approved today and drive your dream car with ease!" />
                <meta name="twitter:image" content="/images/home-cars.webp" />

            </Helmet>

            <div className='about-page'>
                <InternalHeader />
                <CalculatorBudget />
            </div>
        </>
    );
}

export default Calculator;
