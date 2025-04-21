import React from 'react';


const StepperSixteen = ({ formData, setFieldValue, nextStep, prevStep, errors, touched, total_steps, alcStep }) => {
    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>Create your account:</h2>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input' style={{maxWidth:"636px"}}>
                    <span className="input-guide">Email Address</span>
                    <span className='text-input'>
                        <input type='text' className='' value={formData.email} name="email" onChange={(e) => setFieldValue("email", e.target.value)} />
                    </span>
                </div>
                <p style={{ textAlign:'center' }}>
                    Please take a moment to verify your phone number. This helps us confirm your identity and secure your account.
                    <br /><b>When you tap "Submit" we will text you a verification code. Message and data rates may apply.</b>
                </p>
                <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                    <span className="input-guide">Mobile Number</span>
                    <span className='dollar-input can-phone-input'>
                        <input type='number' className='' value={formData.phone_number} name="phone_number" onChange={(e) => setFieldValue("phone_number", e.target.value)} />
                    </span>
                </div>
                <div className='stepper-btn bigger-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Back</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue to Final Step</button>
                </div>
                <div className="stepper-desc">
                    Get access to your vehicle and financing options by creating your account. There is no obligation to <br/> continue with financing if you change your mind.
                </div>
            </div>
        </div>
    );
}

export default StepperSixteen;
