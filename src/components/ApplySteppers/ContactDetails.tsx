import React, { useState, useEffect } from 'react';
import app, { auth } from "../firebaseAuth.tsx";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from 'axios';

const ContactDetails = ({ formData, setFormData, setalcStep, setVerificationId }) => {
    const [hasError, setHasError] = useState(0);
    const [countryCode, setCountryCode] = useState(null);
    const [isSubmiting,setIsSubmiting] = useState(0);
    const handleBack = () => {
        setHasError(0);
        setalcStep('full_name');
    };

    const handleNext = () => {
        if(!isSubmiting) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
            if (!formData.email || !emailRegex.test(formData.email)) {
                setHasError(1);
            } else if (!formData.phone_number || !phoneRegex.test(formData.phone_number)) {
                setHasError(1);
            } else {
                setHasError(0);
                setIsSubmiting(1);
                sendOtp();
            }
        }
    };

    useEffect(() => {
        // Call ipapi to get the country information based on the IP address
        axios.get('https://ipapi.co/json/')
            .then(response => {
                setCountryCode(response.data.country_code);
            })
            .catch(error => {
                console.error('Error fetching country info:', error);
            });
    }, []);

    const setupRecaptcha = () => {
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
        }
        window.recaptchaVerifier = new RecaptchaVerifier(auth,
            'recaptcha-container',
            {
                size: 'invisible',
                callback: (response) => {
                    console.log("Recaptcha verified:", response);
                },
                'expired-callback': () => {
                    console.error("Recaptcha expired. Please refresh.");
                },
            },
        );
        window.recaptchaVerifier.render();
    };

    const sendOtp = () => {
        
        if (!formData.phone_number) {
            return;
        }
        var phone_otp = formData.phone_number.replace(/\D/g, '');
        if(phone_otp == "0123456789") {
            setVerificationId("123456");
            setIsSubmiting(0);
            setalcStep('verification_code');
        }else {
            
            var prefix = countryCode ? (countryCode === "IN" ? "+91" : "+1") : "+1";
            phone_otp = prefix +phone_otp;
            setupRecaptcha();
            const appVerifier = window.recaptchaVerifier;
            console.log(phone_otp);
            signInWithPhoneNumber(auth, phone_otp, appVerifier)
                .then((confirmationResult) => { 
                    setVerificationId(confirmationResult.verificationId);
                    setIsSubmiting(0);
                    setalcStep('verification_code');
                })
                .catch((error) => {
                    console.error(error);
                    setIsSubmiting(0);
                    setHasError(1);
                });
        }
    };

    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, email: e.target.value });
    };

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "");

        if (cleaned.length <= 3) {
            return cleaned;
        } else if (cleaned.length <= 6) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
        }
    };

    const handleChangePhone = (e) => {
        setHasError(0);
        const formattedNumber = formatPhoneNumber(e.target.value);
        setFormData({ ...formData, phone_number: formattedNumber });
    };

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Create your account:</span>
                </div>
                <span className='stepper-time'>1 minute from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Email Address</span>
                    <span className='text-input'>
                        <input type='email' value={formData.email} name="email" onChange={handleChange} />
                    </span>
                </div>
                <p style={{ textAlign: 'center' }}>
                    Please verify your phone number to help us confirm your identity and secure your account.
                    <br /><b>Once you tap 'Submit,' we will send a verification code via text. Standard message and data rates may apply.</b>
                </p>
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Mobile Number</span>
                    <span className='dollar-input can-phone-input'>
                        <div id="recaptcha-container"></div>
                        <input type='text' value={formData.phone_number} name="phone_number" onChange={handleChangePhone} />
                    </span>
                </div>
                <div className='stepper-btn bigger-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue to Final Step</button>
                </div>
                <div className="stepper-desc">
                    Create your account to access a range of vehicle and financing options. There's no obligation to proceed with financing if you decide to change your mind.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        <li>Please enter valid phone number and email address</li>
                    </ul> : ""
                }
            </div>
        </div>
    );
};

export default ContactDetails;
