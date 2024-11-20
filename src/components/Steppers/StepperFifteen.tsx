import React from 'react';

const StepperFifteen = ({ formData, setFieldValue, nextStep, prevStep, errors, touched, total_steps, alcStep }) => {

    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your name?</span>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">First Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="first_name" value={formData.first_name} onChange={(e) => setFieldValue("first_name", e.target.value)} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Last Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="last_name" value={formData.last_name} onChange={(e) => setFieldValue("last_name", e.target.value)} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn bigger-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Back</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue to Final Step</button>
                </div>
            </div>
        </div>
    );
}

export default StepperFifteen;
