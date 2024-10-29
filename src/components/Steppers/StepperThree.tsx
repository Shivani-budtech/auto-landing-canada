import React, { useState } from 'react';


const StepperThree = ({ formData, setFormData, nextStep, prevStep }) => {
    const tradeOptions = [
        {
            'title': 'Yes',
            'val': 'yess'
        },
        {
            'title': 'No',
            'val': 'no'
        },
        {
            'title': 'Not Sure',
            'val': 'not_sure'
        }
    ];
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Do you have a trade-in?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-option-input'>
                    {Object.entries(tradeOptions).map(([key, option]) => (
                        <div key={key} className="option-radio">

                            <label>
                                <span>{option.title}</span>
                                <input
                                    type="radio"
                                    value={option.val}
                                    name="trade_in"
                                    checked={formData.trade_in === option.val}
                                    onChange={(e) => setFormData({ ...formData, trade_in: e.target.value })}
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

export default StepperThree;
