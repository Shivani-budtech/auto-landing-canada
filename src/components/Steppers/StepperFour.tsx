import React from 'react';


const StepperFour = ({ formData, setFieldValue, nextStep, prevStep, errors, touched, total_steps, alcStep }) => {
    const creditOptions = [
        {
            'title': 'Excellent (760-900)',
            'val': 'excellent'
        },
        {
            'title': 'Good (660-724)',
            'val': 'good'
        },
        {
            'title': 'Poor (300-599)',
            'val': 'poor'
        },
        {
            'title': 'Very Good (725-759)',
            'val': 'very_good'
        },
        {
            'title': 'Fair (600-659)',
            'val': 'fair'
        },
        {
            'title': 'No Credit / Unsure',
            'val': 'not_sure'
        }
    ];
    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your estimated credit rating?</span>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
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
                                    name="credit_rating"
                                    checked={formData.credit_rating === option.val}
                                    onChange={(e) => setFieldValue("credit_rating", e.target.value )}
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

export default StepperFour;
