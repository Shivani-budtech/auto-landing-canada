import './index.css';
import '../../responsive.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Faq() {
    const [isOpen, setIsOpen] = useState("");
    const faqs = [
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
    ];
    const toggleFAQ = (key) => {
        setIsOpen(isOpen == key ? "" : key);
    };

    return (
        <section className="faqs-sec">
            <div className="faqs-sec-row container">
                <div className="sec-title">Frequently Asked Questions</div>
                <div className='faq-items'>
                {Object.entries(faqs).map(([key, faq]) => (
                    <div className="faq-item" key={key}>
                        <div className={isOpen == key ? "faq-question opened" : "faq-question"}  onClick={() => toggleFAQ(key)}>
                            {faq.question}
                        </div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: isOpen == key ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="faq-ans">{faq.answer}</div>
                        </motion.div>
                    </div>
                ))}
                </div>
                <Link to="/faqs" className="primary-btn">View All</Link>
            </div>
        </section>
    );
}

export default Faq;
