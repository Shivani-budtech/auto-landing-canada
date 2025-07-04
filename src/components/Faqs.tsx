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
                <meta property="og:image" content="https://autolendingcanada.ca/images/home-cars.webp" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@AutoLendingCA" />
                <meta name="twitter:title" content="FAQs | Get Answers About Auto Financing & Car Loans in Canada" />
                <meta name="twitter:description" content="Find answers to common questions about auto financing in Canada. Learn about car loans, rates, and approvals. Get started today with hassle-free financing!" />
                <meta name="twitter:image" content="/images/home-cars.webp" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                        {
                            "@type": "Question",
                            name: "How do I apply for an online car loan in Canada?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "Applying is easy! Fill out our online application form and get pre-approved for your car loan in minutes.",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "Can I get a car loan with bad credit in Canada?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes! We specialize in providing bad credit car loans in Canada, helping Canadians with all credit backgrounds secure affordable financing. Our flexible loan options make it easier to get approved and drive away in your desired vehicle.",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "What is the minimum credit score required for a car loan in Canada?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "There’s no strict minimum! We work with lenders across Canada to secure the best car loans in Canada, ensuring you get the right financing for your credit situation.",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "How long does it take to get approved for a car loan?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "With our fast approval process, you can get a pre-approved car loan in Canada in as little as a few minutes!",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "What documents are needed for a car loan in Canada?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "You typically need proof of income, identification, and a recent bank statement. We’ll guide you through the process.",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "What are the interest rates for car loans in Canada?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "Our competitive rates vary based on your credit score and loan terms. Contact us for a personalized quote!",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "Can I get a car loan with low monthly payments?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes! We offer flexible financing options with the best auto loan rates in Canada, ensuring low monthly payments that fit your budget and make car ownership affordable.",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "How much money do I need for a down payment on a car loan?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "Down payments aren’t always required, but having one can help you secure the best car loans in Canada by reducing your monthly payments.",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "Do you offer financing for all car makes and models in Canada?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "Absolutely! We offer car financing in Canada for new and used vehicles of all makes and models, ensuring you get the right loan for your needs.",
                            },
                        },
                        {
                            "@type": "Question",
                            name: "Can I refinance my existing car loan?",
                            acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes! Refinancing your car loan with us could help you secure the lowest car finance rates in Canada, reducing your interest rate or monthly payments and saving you more.",
                            },
                        },
                        ],
                    }),
                    }}
                />

            </Helmet>
           


            <section className='faq-page'>
                <InternalHeader />
                <Faq />
            </section>
        </>
    );
}

export default Faqs;
