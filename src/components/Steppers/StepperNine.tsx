import React from 'react';

const StepperNine = ({ formData, setFormData, nextStep, prevStep }) => {


    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Where do you work?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Company Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="company_name" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Job Title</span>
                            <span className='text-input'>
                                <input type='text' className='' name="job_title" value={formData.job_title} onChange={(e) => setFormData({ ...formData, job_title: e.target.value })} />
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

export default StepperNine;
