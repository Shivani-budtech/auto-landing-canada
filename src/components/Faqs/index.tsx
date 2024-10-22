import './index.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
function Faq() {
    const [isOpen, setIsOpen] = useState("");
    const faqs = [
        {
            question: "Why use Auto Lending Canada?",
            answer: "We connect Canadians with a variety of different financial products that they need. Whether it’s a personal loan, auto loan, mortgage, or anything else! If you’re looking for anything that’s not listed then send us a message and we will do our best to help. ",
        },
        {
            question: "Why use Auto Lending Canada?",
            answer: "We connect Canadians with a variety of different financial products that they need. Whether it’s a personal loan, auto loan, mortgage, or anything else! If you’re looking for anything that’s not listed then send us a message and we will do our best to help. ",
        },
        {
            question: "Why use Auto Lending Canada?",
            answer: "We connect Canadians with a variety of different financial products that they need. Whether it’s a personal loan, auto loan, mortgage, or anything else! If you’re looking for anything that’s not listed then send us a message and we will do our best to help. ",
        },
        {
            question: "Why use Auto Lending Canada?",
            answer: "We connect Canadians with a variety of different financial products that they need. Whether it’s a personal loan, auto loan, mortgage, or anything else! If you’re looking for anything that’s not listed then send us a message and we will do our best to help. ",
        },
        {
            question: "Why use Auto Lending Canada?",
            answer: "We connect Canadians with a variety of different financial products that they need. Whether it’s a personal loan, auto loan, mortgage, or anything else! If you’re looking for anything that’s not listed then send us a message and we will do our best to help. ",
        },
        {
            question: "Why use Auto Lending Canada?",
            answer: "We connect Canadians with a variety of different financial products that they need. Whether it’s a personal loan, auto loan, mortgage, or anything else! If you’re looking for anything that’s not listed then send us a message and we will do our best to help. ",
        },
    ];
    const toggleFAQ = (key) => {
        setIsOpen(isOpen == key ? "" : key);
    };

    return (
        <section className="faqs-sec">
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
        </section>
    );
}

export default Faq;
