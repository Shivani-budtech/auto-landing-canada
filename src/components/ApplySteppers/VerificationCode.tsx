import React, { useState, useRef } from 'react';


const VerificationCode = ({ formData, setFormData, setalcStep }) => {

    const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const changeCode = (e, index) => {
        const value = e.target.value;
        const updatedCode = [...verificationCode];
        if (value.match(/^[0-9]$/)) {
            updatedCode[index] = value;
            setVerificationCode(updatedCode);

            // Move focus to the next input if not the last one
            if (index < 3 && value) {
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
        setalcStep('application_success');
    }

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Enter verification code:</span>
                </div>
                <span className='stepper-time'>Almost done</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Please enter the 4 digit code we sent to<br />{formData.phone_number.replace(/(\d{3})-(\d{4})$/, "$1-XXXX")}</span>
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
                    <a href='#'>
                        Resend Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default VerificationCode;
