import React from 'react';
import { Helmet } from "react-helmet-async";
import InternalHeader from './InternalHeader/index.tsx';
import ContactUsForm from './ContactUsForm/index.tsx';

function About() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Contact Auto Lending Canada | Car Financing & Best Rates</title>
                <meta name="description" content="Get in touch with Auto Lending Canada for the best auto financing rates in Canada. We make car financing easy and stress-free. Contact us today!" />
                <meta name="keywords" content="best auto financing rates in Canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/contact-us" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Contact Auto Lending Canada | Car Financing & Best Rates" />
                <meta property="og:description" content="Get in touch with Auto Lending Canada for the best auto financing rates in Canada. We make car financing easy and stress-free. Contact us today!" />
                <meta property="og:url" content="https://autolendingcanada.ca/contact-us" />
            </Helmet>

            <section className='contact-page'>
                <InternalHeader />
                <ContactUsForm />
            </section>
        </>
    );
}

export default About;
