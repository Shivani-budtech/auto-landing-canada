import React from 'react';


const StepperFour = ({ formData, setFormData, nextStep, prevStep }) => {
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
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your estimated credit rating?</span>
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
                                    name="credit_rating"
                                    checked={formData.credit_rating === option.val}
                                    onChange={(e) => setFormData({ ...formData, credit_rating: e.target.value })}
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
