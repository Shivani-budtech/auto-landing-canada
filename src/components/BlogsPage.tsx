import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import AllBlogsNew from './Blogs/index.tsx';
import { Helmet } from "react-helmet-async";

function BlogsPage() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Blog - Car Financing, Car Loan Eligibility, Interest Rates & More!</title>
                <meta 
                    name="description" 
                    content="Learn about car loan eligibility, interest rates, and find the best deals at Auto Lending Canada. Get expert tips and insights for a smooth car financing experience" 
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/blogs" />

                {/* Open Graph Metadata for Social Sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Blog - Car Financing, Car Loan Eligibility, Interest Rates & More!" />
                <meta 
                    property="og:description" 
                    content="Learn about car loan eligibility, interest rates, and find the best deals at Auto Lending Canada. Get expert tips and insights for a smooth car financing experience" 
                />
                <meta property="og:url" content="https://autolendingcanada.ca/blogs" />
                <meta property="og:image" content="https://autolendingcanada.ca/images/home-cars.webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@AutoLendingCA" />
                <meta name="twitter:title" content="Blog - Car Financing, Car Loan Eligibility, Interest Rates & More!" />
                <meta name="twitter:description" content="Learn about car loan eligibility, interest rates, and find the best deals at Auto Lending Canada. Get expert tips and insights for a smooth car financing experience" />
                <meta name="twitter:image" content={`/images/home-cars.webp`}/>

            </Helmet>
            <section className='blogs-page-new'>
                <InternalHeader />
                <AllBlogsNew />
            </section>
        </>
    );
}

export default BlogsPage;
