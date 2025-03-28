import React from 'react';
import { Helmet } from "react-helmet-async";
import InternalHeader from './InternalHeader/index.tsx';
import Faq from './FaqTabs/index.tsx';

function Faqs() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>FAQs | Get Answers About Auto Financing Canada</title>
                <meta name="description" content="Find answers to common questions about auto financing in Canada. Learn about loans, rates, and approvals. Get started today with hassle-free financing!" />
                <meta name="keywords" content="auto financing in Canada, bad credit car loans in Canada, best car loans in Canada, pre-approved car loan, car financing in Canada, lowest car finance rates in Canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/faqs" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="FAQs | Get Answers About Auto Financing Canada" />
                <meta property="og:description" content="Find answers to common questions about auto financing in Canada. Learn about loans, rates, and approvals. Get started today with hassle-free financing!" />
                <meta property="og:url" content="https://autolendingcanada.ca/faqs" />
            </Helmet>

            <section className='faq-page'>
                <InternalHeader />
                <Faq />
            </section>
        </>
    );
}

export default Faqs;
