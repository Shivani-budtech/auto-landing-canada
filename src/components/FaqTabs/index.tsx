import './index.css';
import '../../responsive.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
function Faq() {
    const generalfaqs = [
        {
            question: "Why use Auto Lending Canada? (general)",
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
    const financefaqs = [
        {
            question: "Why use Auto Lending Canada? (financial)",
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
    const creditfaqs = [
        {
            question: "Why use Auto Lending Canada? (credit)",
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
    const guidefaqs = [
        {
            question: "Why use Auto Lending Canada? (guide)",
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
    const [isOpen, setIsOpen] = useState("");
    const [faqs,setFaqs] = useState(generalfaqs);
    const [selectedFaq, setSelectedFaq] = useState("general");
    
    const toggleFAQ = (key) => {
        setIsOpen(isOpen == key ? "" : key);
    };
    const changeTab = (key) => {
        if(key == "general") {
            setFaqs(generalfaqs);
        } else if (key == "finance") {
            setFaqs(financefaqs);
        } else if (key == "credit") {
            setFaqs(creditfaqs);
        } else if (key == "guide") {
            setFaqs(guidefaqs);
        }
        setSelectedFaq(key);
        setIsOpen("");
    }

    return (
        <section className="faqs-tab-sec">
            <div className='faqs-tabs'>
                <div className={selectedFaq == "general" ? "faqs-tab selected" : "faqs-tab"} onClick={() => changeTab("general")}>
                    General
                </div>
                <div className={selectedFaq == "finance" ? "faqs-tab selected" : "faqs-tab"} onClick={() => changeTab("finance")}>
                    Finance Options
                </div>
                <div className={selectedFaq == "credit" ? "faqs-tab selected" : "faqs-tab"} onClick={() => changeTab("credit")}>
                    Credit Score
                </div>
                <div className={selectedFaq == "guide" ? "faqs-tab selected" : "faqs-tab"} onClick={() => changeTab("guide")}>
                    Guide
                </div>
            </div>
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
