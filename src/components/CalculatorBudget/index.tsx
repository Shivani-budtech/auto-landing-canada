import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import '../../responsive.css';
import $ from 'jquery';
import 'select2';
import axios from 'axios';
import 'select2/dist/css/select2.min.css';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
import { Link } from "react-router-dom";

function CalculatorBudget() {

    const [loanAmount,setLoanAmount] = useState(0);
    const [loanDuration, setLoanDuration] = useState('');
    const [creditRating, setCreditRating] = useState('');

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [weeklyPayment, setWeeklyPayment] = useState(0);
    const [biWeeklyPayment, setBiWeeklyPayment] = useState(0);

    const handleChangeLoanAmount = (e) => {
        var value = e.target.value;
        const numericValue = value.replace(/[^0-9.]/g, "");
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setLoanAmount(formattedValue);
    }
    useEffect(() => {
        const calculateLoan = async () => {
            if (loanAmount > 0 && loanDuration && creditRating) {
                try {
                    const response = await axios.post(`${API_URL}calculate_loan`, {
                        loan_amount: loanAmount,
                        loan_duration: loanDuration,
                        credit_rating: creditRating,
                    });
                    const { monthly, weekly, bi_weekly } = response.data;
                    setMonthlyPayment(monthly);
                    setWeeklyPayment(weekly);
                    setBiWeeklyPayment(bi_weekly);
                } catch (error) {
                    console.error('Error calculating loan:', error);
                }
            }
        };

        calculateLoan();
    }, [loanAmount, loanDuration, creditRating]);

    useEffect(() => {
        // Initialize Select2 for the first select box
        $('#loan_duration').select2({
            placeholder: 'Loan Duration',
        }).on("change", function (e) {
            setLoanDuration(this.value);
        });
        $('#credit_rating').select2({
            placeholder: 'Credit Rating',
        }).on("change", function (e) {
            setCreditRating(this.value);
        });
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
                <form>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="form-input">
                                <input
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    value={loanAmount}
                                    onChange={handleChangeLoanAmount}
                                    placeholder='Loan Amount'
                                    required
                                />
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="form-input">
                                <select id="loan_duration">
                                    <option value="">Loan duration</option>
                                    <option value="12" selected={loanDuration === "12"}>12 Months</option>
                                    <option value="24" selected={loanDuration === "24"}>24 Months</option>
                                    <option value="36" selected={loanDuration === "36"}>36 Months</option>
                                    <option value="48" selected={loanDuration === "48"}>48 Months</option>
                                    <option value="60" selected={loanDuration === "60"}>60 Months</option>
                                    <option value="72" selected={loanDuration === "72"}>72 Months</option>
                                    <option value="84" selected={loanDuration === "84"}>84 Months</option>
                                    <option value="96" selected={loanDuration === "96"}>96 Months</option>
                                </select>
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="form-input">
                                <select id="credit_rating">
                                    <option value="">Credit Rating</option>
                                    <option value="poor">Poor</option>
                                    <option value="average">Average</option>
                                    <option value="good">Good</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="calculated-counter-sec">
                                <h1>
                                    ${new Intl.NumberFormat('en-US').format(monthlyPayment)}
                                </h1>
                                <p>
                                    Monthly Payment
                                </p>
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="calculated-counter-sec">
                                <h1>
                                    ${new Intl.NumberFormat('en-US').format(weeklyPayment)}
                                </h1>
                                <p>
                                    Weekly Payment
                                </p>
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="calculated-counter-sec">
                                <h1>
                                    ${new Intl.NumberFormat('en-US').format(biWeeklyPayment)}
                                </h1>
                                <p>
                                    Bi-Weekly Payment
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-row'>
                        <Link to="/apply" className='primary-btn'>Get Pre-Approved Today</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CalculatorBudget;
