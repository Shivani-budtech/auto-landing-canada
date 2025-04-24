import React from 'react';
import { Helmet } from "react-helmet-async";
import InternalHeader from './InternalHeader/index.tsx';
import CustomerReview from './CustomerReview/index.tsx';

function CustomerStories() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Explore Our Successful Customer Stories | Auto Lending Canada</title>
                <meta name="description" content="Discover how customers secured new car loan interest rates in Canada with ease. Get inspired and apply today for hassle-free financing at the best rates!" />
                <meta name="keywords" content="new car loan interest rates in Canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/customer-stories" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Explore Our Successful Customer Stories | Auto Lending Canada" />
                <meta property="og:description" content="Discover how customers secured new car loan interest rates in Canada with ease. Get inspired and apply today for hassle-free financing at the best rates!" />
                <meta property="og:url" content="https://autolendingcanada.ca/customer-stories" />
                <meta property="og:image" content="https://autolendingcanada.ca/admin/public/uploads/1739186830_1738824909_testimonials%20(1)%20(1)%20(1).jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@AutoLendingCA" />
                <meta name="twitter:title" content="Explore Our Successful Customer Stories | Auto Lending Canada" />
                <meta name="twitter:description" content="Discover how customers secured new car loan interest rates in Canada with ease. Get inspired and apply today for hassle-free financing at the best rates!" />
                <meta name="twitter:image" content="/images/how_works_banner.webp" />

            </Helmet>

            <div className='customer-stories-page'>
                <InternalHeader />
                <CustomerReview />
            </div>
        </>
    );
}

export default CustomerStories;
