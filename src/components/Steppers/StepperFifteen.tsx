import React from 'react';

const StepperFifteen = ({ formData, setFormData, nextStep, prevStep }) => {


    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your name?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">First Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="first_name" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Last Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="last_name" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Previous</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default StepperFifteen;
