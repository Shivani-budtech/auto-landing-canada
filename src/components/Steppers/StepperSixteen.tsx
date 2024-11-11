import React from 'react';


const StepperSixteen = ({ formData, setFieldValue, nextStep, prevStep }) => {

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Create your account:</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide">Email Address</span>
                    <span className='text-input'>
                        <input type='text' className='' value={formData.email} name="email" onChange={(e) => setFieldValue("email", e.target.value)} />
                    </span>
                </div>
                <p style={{ textAlign:'center' }}>
                    Please take a moment to verify your phone number. This helps us confirm your identity and secure your account.
                    <br /><b>When you tap "Submit" we will text you a verification code. Message and data rates may apply.</b>
                </p>
                <div className='stepper-text-input'>
                    <span className="input-guide">Mobile Number</span>
                    <span className='dollar-input phone-input'>
                        <input type='number' className='' value={formData.phone_number} name="phone_number" onChange={(e) => setFieldValue("phone_number", e.target.value)} />
                    </span>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Previous</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default StepperSixteen;
