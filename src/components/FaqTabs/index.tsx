import { motion } from 'framer-motion';
import React, { useState } from 'react';
import '../../responsive.css';
import './index.css';
function Faq() {
    const generalfaqs = [
        {
            question: "How do I apply for an online car loan in Canada?",
            answer: "Applying is easy! Fill out our online application form and get pre-approved for your car loan in minutes. ",
        },
        {
            question: "Can I get a car loan with bad credit in Canada?",
            answer: "Yes! We specialize in providing bad credit car loans in Canada, helping Canadians with all credit backgrounds secure affordable financing. Our flexible loan options make it easier to get approved and drive away in your desired vehicle.",
        },
        {
            question: "What is the minimum credit score required for a car loan in Canada?",
            answer: "There’s no strict minimum! We work with lenders across Canada to secure the best car loans in Canada, ensuring you get the right financing for your credit situation.",
        },
        {
            question: "How long does it take to get approved for a car loan?",
            answer: "With our fast approval process, you can get a pre-approved car loan in Canada in as little as a few minutes!",
        },
        {
            question: "What documents are needed for a car loan in Canada?",
            answer: " You typically need proof of income, identification, and a recent bank statement. We’ll guide you through the process. ",
        },
        {
            question: "What are the interest rates for car loans in Canada?",
            answer: "Our competitive rates vary based on your credit score and loan terms. Contact us for a personalized quote!",
        },
        {
            question: "Can I get a car loan with low monthly payments?",
            answer: "Yes! We offer flexible financing options with the best auto loan rates in Canada, ensuring low monthly payments that fit your budget and make car ownership affordable.",
        },
        {
            question: "How much money do I need for a down payment on a car loan?",
            answer: "Down payments aren’t always required, but having one can help you secure the best car loans in Canada by reducing your monthly payments.",
        },
        {
            question: "Do you offer financing for all car makes and models in Canada?",
            answer: "Absolutely! We offer car financing in Canada for new and used vehicles of all makes and models, ensuring you get the right loan for your needs.",
        },
        {
            question: "Can I refinance my existing car loan?",
            answer: "Yes! Refinancing your car loan with us could help you secure the lowest car finance rates in Canada, reducing your interest rate or monthly payments and saving you more.",
        },
    ];
    const [isOpen, setIsOpen] = useState("");
    const [faqs,setFaqs] = useState(generalfaqs);
    
    const toggleFAQ = (key) => {
        setIsOpen(isOpen == key ? "" : key);
    };

    return (
        <section className="faqs-tab-sec">
            
            <div className='faq-tab-items' >
                {Object.entries(faqs).map(([key, faq]) => (
                    <div className="faq-tab-item" key={key}>
                        <div className={isOpen == key ? "faq-tab-question opened" : "faq-tab-question"} onClick={() => toggleFAQ(key)}>
                            {faq.question}
                        </div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: isOpen == key ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="faq-tab-ans">{faq.answer}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faq;
