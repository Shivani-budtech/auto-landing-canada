import React from 'react';


const StepperFive = ({ formData, setFormData, nextStep, prevStep }) => {
    const creditOptions = [
        {
            'title': 'Employed',
            'val': 'employed'
        },
        {
            'title': 'Student',
            'val': 'student'
        },
        {
            'title': 'Self-Employed',
            'val': 'self-employed'
        },
        {
            'title': 'Retired / Pension',
            'val': 'retired'
        },
        {
            'title': 'Other',
            'val': 'other'
        }
    ];
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your employment status?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-option-input'>
                    {Object.entries(creditOptions).map(([key, option]) => (
                        <div key={key} className="option-radio">

                            <label>
                                <span>{option.title}</span>
                                <input
                                    type="radio"
                                    value={option.val}
                                    name="employment_status"
                                    checked={formData.employment_status === option.val}
                                    onChange={(e) => setFormData({ ...formData, employment_status: e.target.value })}
                                />
                            </label>
                        </div>
                    ))}
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Previous</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default StepperFive;
