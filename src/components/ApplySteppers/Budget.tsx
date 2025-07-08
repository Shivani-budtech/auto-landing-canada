import React, { useState } from 'react';

const Budget = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const budgetOptions = [
        {
            'title': 'Under $400 / Month',
            'val': 'under_400'
        },
        {
            'title': '$400 - 499 / Month',
            'val': '400_to_499'
        },
        {
            'title': '$500 - 600 / Month',
            'val': '500_to_600'
        },
        {
            'title': 'Over $600 / Month',
            'val': 'over_600'
        }
    ];

    const handleBack = () => {
        setHasError(0);
        setalcStep('vehicle_type'); 
    }

    const handleNext = () => {
        if (formData.budget === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('trade_in'); // Move to the next step
        }
    }
    // const handleChange = (e) => {
    //     setHasError(0);
    //     setFormData({ ...formData, budget: e.target.value });
    // };

    const handleChange = (e) => {
        const selectedValue = e.target.value;
      
        setFormData(prev => ({ ...formData, budget: selectedValue }));
        setHasError(0);
        // setalcStep('trade_in'); // ✅ Move to next step immediately
        setTimeout(() => {
            setalcStep('trade_in');
          }, 400);
      };
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>What is your budget range?</h2>
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
                    Discover Vehicle Options Within Your Budget.
                </h3>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.budget === "" ? <li>Budget is required</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default Budget;
