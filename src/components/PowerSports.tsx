import React from 'react';
import { Helmet } from "react-helmet-async";
import InternalHeader from './InternalHeader/index.tsx';
import PowerSport from './PowerSport/index.tsx';

function PowerSports() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Affordable Power Sports Loans | Auto Financing Rates in Canada</title>
                <meta name="description" content="Get the best auto financing rates in Canada for motorcycles, ATVs, and jet skis. Apply now for flexible loan options and ride your dream vehicle today!" />
                <meta name="keywords" content="auto financing Canada, auto financing rates in Canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/power-sports" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Affordable Power Sports Loans | Auto Financing Rates in Canada" />
                <meta property="og:description" content="Get the best auto financing rates in Canada for motorcycles, ATVs, and jet skis. Apply now for flexible loan options and ride your dream vehicle today!" />
                <meta property="og:url" content="https://autolendingcanada.ca/power-sports" />
            </Helmet>

            <section className='power-sport-page'>
                <InternalHeader />
                <PowerSport />
            </section>
        </>
    );
}

export default PowerSports;
