import React from 'react';
import { Helmet } from "react-helmet-async";
import InternalHeader from './InternalHeader/index.tsx';
import Faq from './FaqTabs/index.tsx';

function Faqs() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>FAQs | Get Answers About Auto Financing & Car Loans in Canada</title>
                <meta name="description" content="Find answers to common questions about auto financing in Canada. Learn about car loans, rates, and approvals. Get started today with hassle-free financing!" />
                <meta name="keywords" content="auto financing in Canada, bad credit car loans in Canada, best car loans in Canada, pre-approved car loan, car financing in Canada, lowest car finance rates in Canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/faqs" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="FAQs | Get Answers About Auto Financing & Car Loans in Canada" />
                <meta property="og:description" content="Find answers to common questions about auto financing in Canada. Learn about car loans, rates, and approvals. Get started today with hassle-free financing!" />
                <meta property="og:url" content="https://autolendingcanada.ca/faqs" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@AutoLendingCA" />
                <meta name="twitter:title" content="FAQs | Get Answers About Auto Financing & Car Loans in Canada" />
                <meta name="twitter:description" content="Find answers to common questions about auto financing in Canada. Learn about car loans, rates, and approvals. Get started today with hassle-free financing!" />
                <meta name="twitter:image" content="/images/home-cars.webp" />


            </Helmet>

            <section className='faq-page'>
                <InternalHeader />
                <Faq />
            </section>
        </>
    );
}

export default Faqs;
