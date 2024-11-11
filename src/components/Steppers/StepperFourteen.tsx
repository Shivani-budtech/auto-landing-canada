import React from 'react';


const StepperFourteen = ({ formData, setFieldValue, nextStep, prevStep }) => {

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your date of birth?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide">Select Date of Birth</span>
                    <span className='dollar-input calender'>
                        <input type='date' className='' value={formData.birth_date} name="birth_date" onChange={(e) => setFieldValue("birth_date", e.target.value)} />
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

export default StepperFourteen;
