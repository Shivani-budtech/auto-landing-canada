import React, { useState } from 'react';


const StepperTwo = ({ formData, setFormData, nextStep, prevStep }) => {
    const budgetOptions = [
        {
            'title': 'Under $400 / Month',
            'val': 'option_1'
        },
        {
            'title': '$500 - 600 / Month',
            'val': 'option_2'
        },
        {
            'title': '$400 - 499 / Month',
            'val': 'option_3'
        },
        {
            'title': 'Over $600 / Month',
            'val': 'option_4'
        }
    ];
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your budget?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-option-input'>
                    {Object.entries(budgetOptions).map(([key, option]) => (
                        <div key={key} className="option-radio">
                            
                            <label>
                                <span>{option.title}</span>
                                <input
                                    type="radio"
                                    value={option.val}
                                    name="budget"
                                    checked={formData.budget === option.val}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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

export default StepperTwo;