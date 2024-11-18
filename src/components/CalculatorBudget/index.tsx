import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import '../../responsive.css';
import $ from 'jquery';
import 'select2'; // Import Select2 jQuery plugin
import 'select2/dist/css/select2.min.css';

function CalculatorBudget() {
    const [formData, setFormData] = useState({
        amount : "",
        duration : "",
        credit_rating : ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    };

    useEffect(() => {
        // Initialize Select2 for the first select box
        $('#loan_duration').select2({
            placeholder: 'Loan Duration',
        });

        // Initialize Select2 for the second select box
        $('#credit_rating').select2({
            placeholder: 'Credit Rating',
        });

        // Cleanup on component unmount
        return () => {
            $('#loan_duration').select2('destroy');
            $('#credit_rating').select2('destroy');
        };
    }, []);

    return (
        <section className='contact-us-sec calculator-budget container'>
            <div className="sec-title">
                Car Loan Calculator
                <span>
                    Pick your loan amount, pick the duration of your loan, and choose your credit rating to help determine your finance options.
                </span>
            </div>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="form-input">
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    placeholder='Amount'
                                    required
                                />
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="form-input">
                                <select id="loan_duration">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="form-input">
                                <select id="credit_rating">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="calculated-counter-sec">
                                <h1>
                                    $0
                                </h1>
                                <p>
                                    Monthly Payment
                                </p>
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="calculated-counter-sec">
                                <h1>
                                    $0
                                </h1>
                                <p>
                                    Weekly Payment
                                </p>
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="calculated-counter-sec">
                                <h1>
                                    $0
                                </h1>
                                <p>
                                    Bi-Weekly Payment
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-row'>
                        <a href='#' className='primary-btn'>Get Pre-Approved Today</a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CalculatorBudget;
