import React, { useState } from 'react';


const CoSignerContactDetails = ({ formData, setFormData, setalcStep, handleSubmit }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer_date_of_birth');
    }

    const handleNext = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!formData.co_signer_email || !emailRegex.test(formData.co_signer_email)) {
            setHasError(1);
        } else if (!formData.co_signer_phone_number || !phoneRegex.test(formData.co_signer_phone_number)) {
            setHasError(1);
        } else {
            setHasError(0); // Clear error
            handleSubmit(); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_email: e.target.value });
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
        setFormData({ ...formData, co_signer_phone_number: formattedNumber });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-signer details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Create your account:</span>
                </div>
                <span className='stepper-time'>1 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Email Address</span>
                    <span className='text-input'>
                        <input type='email' className='' value={formData.co_signer_email} name="co_signer_email" onChange={handleChange} />
                    </span>
                </div>
                <p style={{ textAlign: 'center' }}>
                    Please verify your phone number to help us confirm your identity and secure your account.
                    <br /><b>Once you tap 'Submit,' we will send a verification code via text. Standard message and data rates may apply.</b>
                </p>
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Mobile Number</span>
                    <span className='dollar-input can-phone-input'>
                        <input type='text' className='' value={formData.co_signer_phone_number} name="co_signer_phone_number" onChange={handleChangePhone} />
                    </span>
                </div>
                <div className='stepper-btn bigger-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Submit</button>
                </div>
                <div className="stepper-desc">
                    Create your account to access a range of vehicle and financing options. There's no obligation to proceed with financing if you decide to change your mind.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        <li>Please enter valid phone number and address</li>
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerContactDetails;