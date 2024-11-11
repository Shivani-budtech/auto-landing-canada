import React from 'react';


const StepperSeven = ({ formData, setFieldValue, nextStep, prevStep }) => {
    
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Income Details. Please Select One:</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide">Round to Nearest Dollar</span>
                    <span className='dollar-input'>
                        <input type='number' className='' value={formData.income_amount} name="income_amount" onChange={(e) => setFieldValue("income_amount", e.target.value )} />
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

export default StepperSeven;
