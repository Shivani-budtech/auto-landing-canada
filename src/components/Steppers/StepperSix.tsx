import React from 'react';


const StepperSix = ({ formData, setFieldValue, nextStep, prevStep }) => {
    const SalaryOptions = [
        {
            'title': 'I Know My Annual Salary',
            'val': 'option_1'
        },
        {
            'title': 'I Know My Monthly Income',
            'val': 'option_2'
        },
        {
            'title': 'I Know My Hourly Wage',
            'val': 'option_3'
        },
        {
            'title': 'Other',
            'val': 'option_4'
        }
    ];
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Income Details. Please Select One:</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-option-input'>
                    {Object.entries(SalaryOptions).map(([key, option]) => (
                        <div key={key} className="option-radio">

                            <label>
                                <span>{option.title}</span>
                                <input
                                    type="radio"
                                    value={option.val}
                                    name="income_detail"
                                    checked={formData.income_detail === option.val}
                                    onChange={(e) => setFieldValue("income_detail", e.target.value )}
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

export default StepperSix;
