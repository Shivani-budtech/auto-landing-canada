import React, { useState, useRef, useEffect } from 'react';
import { auth } from "../firebaseAuth.tsx";
import { getAuth, signInWithCredential, PhoneAuthProvider } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from 'axios';

const VerificationCode = ({ formData, setFormData, setalcStep, verificationId, setVerificationId }) => {
    const [hasError, setHasError] = useState(0);
    const [resentOtp, setResentOtp] = useState(1);
    const [verificationCode, setVerificationCode] = useState(["", "", "", "","",""]);
    const [isSubmiting,setIsSubmiting] = useState(0);
    const inputsRef = useRef([]);
    const [countryCode, setCountryCode] = useState(null);
    const [seconds, setSeconds] = useState(30);

    const sendOtp = () => {
            setHasError(0);
            setVerificationCode(["","","","","",""]);
            if(resentOtp === 0) {
                setResentOtp(1)
                setSeconds(30)
                if (!formData.phone_number) {
                    return;
                }
                var phone_otp = formData.phone_number.replace(/\D/g, '');
                var prefix = (countryCode === "IN") ? "+91" : "+1";
                phone_otp = prefix +phone_otp;
                // var phone_otp = "+918200552843";
                setupRecaptcha();
                const appVerifier = window.recaptchaVerifier;
                console.log(phone_otp);
                signInWithPhoneNumber(auth, phone_otp, appVerifier)
                .then((confirmationResult) => { 
                    setVerificationId(confirmationResult.verificationId);
                })
                .catch((error) => {
                    console.error(error);
                });
            }
        };

    const verifyOtp = async () => {
        if(!isSubmiting) {
            setIsSubmiting(1);
            const otp = verificationCode.join('');
            
            if (!verificationId) {
                alert("No OTP sent. Please try again.");
                return;
            }
            try {
                const auth = getAuth();
                const credential = PhoneAuthProvider.credential(verificationId, otp); // Create the credential
                await signInWithCredential(auth, credential); // Sign in with the credential
                setalcStep('application_success'); // Move to the next step
            } catch (error) {
                console.error("Error verifying OTP:", error);
                setHasError(1);
            } finally {
                setIsSubmiting(0);
            }
        }
    };

    const changeCode = (e, index) => {
        const value = e.target.value;
        const updatedCode = [...verificationCode];
        if (value.match(/^[0-9]$/)) {
            updatedCode[index] = value;
            setVerificationCode(updatedCode);

            // Move focus to the next input if not the last one
            if (index < 5 && value) {
                inputsRef.current[index + 1]?.focus();
            }
        } else {
            // Only accept numbers
            updatedCode[index] = "";
            setVerificationCode(updatedCode);
        }
    };
    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && !verificationCode[index]) {
            if (index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    const handleBack = () => {
        setalcStep('contact_details');
    }
    const handleNext = () => {
        verifyOtp();
    }

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
    useEffect(() => {
        if (seconds <= 0) {
            setResentOtp(0)
            return;
        }

        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [seconds]);

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

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>Enter verification code:</h2>
                </div>
                <span className='stepper-time'>Almost done</span>
            </div>
            <div className="stepper-input">
                <div id="recaptcha-container"></div>
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Please enter the 6 digit code we sent to<br />{formData.phone_number.replace(/(\d{3})-(\d{4})$/, "$1-XXXX")}</span>
                    <span className='text-input verification-code-input'>
                        {verificationCode.map((code, index) => (
                            <input
                                key={index}
                                type="text"
                                className=""
                                maxLength="1"
                                name={`verification_code_${index + 1}`}
                                value={code}
                                ref={(el) => inputsRef.current[index] = el}
                                onChange={(e) => changeCode(e, index)}
                                onKeyDown={(e) => handleBackspace(e, index)}
                            />
                        ))}
                    </span>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Verify</button>
                </div>
                <div className="stepper-desc verify-desc">
                    {seconds > 0 ? 
                        <div className="">
                            resend code in {seconds} seconds
                        </div> : ""
                    }
                    
                    {resentOtp == 0 ?
                        <button type='button' onClick={sendOtp}>Resend Code</button> : 
                        ""
                    }
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        <li>Please enter valid OTP</li>
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default VerificationCode;
