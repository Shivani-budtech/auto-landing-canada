import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import AllBlogs from './AllBlogs/index.tsx';
import FeatureBlogs from './FeaturedBlogs/index.tsx';
import { Helmet } from "react-helmet-async";


function Blogs() {
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
            </Helmet>
        <section className='blogs-page'>
            <InternalHeader />
            <div className='all-blogs-row container'>
                <AllBlogs />
                <FeatureBlogs />
            </div>
        </section>
        </>
    );
}

export default Blogs;
