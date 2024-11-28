import './index.css';
import '../../responsive.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
function Faq() {
    const generalfaqs = [
        {
            question: "How do I apply for a car loan in Canada?",
            answer: "Applying is easy! Fill out our online application form and get pre-approved for your car loan in minutes. ",
        },
        {
            question: "Can I get a car loan with bad credit in Canada?",
            answer: "Yes, we specialize in helping Canadians with all credit types, including bad credit, secure affordable car loans. ",
        },
        {
            question: "What is the minimum credit score required for a car loan in Canada?",
            answer: "There’s no strict minimum; we work with lenders across Canada to find the best car financing option for your credit situation.",
        },
        {
            question: "How long does it take to get approved for a car loan?",
            answer: "With our fast approval process, you can receive car loan approval in as little as a few minutes!",
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
            answer: "Yes, we tailor financing options to fit your budget, offering low monthly payment plans to make owning a car affordable.",
        },
        {
            question: "How much money do I need for a down payment on a car loan?",
            answer: "Down payments aren’t always required, but having one can reduce your monthly payments and interest rates.",
        },
        {
            question: "Do you offer financing for all car makes and models in Canada?",
            answer: "Absolutely! We provide auto loans for new and used vehicles of all makes and models across Canada.",
        },
        {
            question: "Can I refinance my existing car loan?",
            answer: "Yes, refinancing your car loan with us could lower your interest rate or monthly payments, helping you save more.",
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
