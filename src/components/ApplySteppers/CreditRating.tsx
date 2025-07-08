import React, { useState } from 'react';


const CreditRating = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const creditOptions = [
        {
            'title': 'Excellent (760-900)',
            'val': 'excellent'
        },
        {
            'title': 'Very Good (725-759)',
            'val': 'very_good'
        },
        {
            'title': 'Good (660-724)',
            'val': 'good'
        },
        {
            'title': 'Fair (600-659)',
            'val': 'fair'
        },
        {
            'title': 'Poor (300-599)',
            'val': 'poor'
        },
        {
            'title': 'No Credit / Unsure',
            'val': 'not_sure'
        }
    ];

    const handleBack = () => {
        setHasError(0);
        setalcStep('trade_in');
    }

    const handleNext = () => {
        if (formData.credit_rating === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('employment_status'); // Move to the next step
        }
    }
    // const handleChange = (e) => {
    //     setHasError(0);
    //     setFormData({ ...formData, credit_rating: e.target.value });
    // };

    const handleChange = (e) => {
        const selectedValue = e.target.value;
      
        setFormData(prev => ({ ...formData, credit_rating: selectedValue }));
        setHasError(0);
        setTimeout(() => {
            setalcStep('employment_status');
          }, 400);
        // setalcStep('employment_status'); // ✅ Move to next step immediately
      };
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>What is your approximate credit score?</h2>
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
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    ))}
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <h3 className="stepper-desc">
                    Enjoy great rates, no matter your credit score.
                </h3>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.credit_rating === "" ? <li>Credit Rating is required</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CreditRating;
