import React, { useState, useRef } from 'react';


const StepperSeventeen = ({ formData, setFieldValue, nextStep, prevStep, errors, touched, total_steps, alcStep }) => {
    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);

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

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>Enter verification code:</h2>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Please enter the 4 digit code we sent to<br/>(905) 000-XXXX</span>
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
                    <button type='button' className='secondary-btn' onClick={prevStep}>Back</button>
                    <button type='button' className='primary-btn'>Verify</button>
                </div>
                <div className="stepper-desc verify-desc">
                    <a href='#'>
                        Call me instead
                    </a>
                    <a href='#'>
                        Resend Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StepperSeventeen;
