import React, { useState } from 'react';


const TradeIn = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
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

    const handleBack = () => {
        setHasError(0);
        setalcStep('budget');
    }

    const handleNext = () => {
        if (formData.trade_in === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('credit_rating'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, trade_in: e.target.value });
    };

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>Do you have a vehicle to trade in?</h2>
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
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.trade_in === "" ? <li>Do you have trade in?</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default TradeIn;
