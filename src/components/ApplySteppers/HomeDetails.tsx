import React,{ useState } from 'react';

const HomeDetails = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('years_of_living');
    }

    const handleNext = () => {
        if (formData.home_type === "" || formData.monthly_payment === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('citizen_details'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, home_type: e.target.value });
    };
    const handleChangePayment = (e) => {
        setHasError(0);
        var value = e.target.value;
        const numericValue = value.replace(/[^0-9.]/g, "");
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setFormData({ ...formData, monthly_payment: formattedValue });
    }
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Do you currently rent or own your home?</span>
                </div>
                <span className='stepper-time'>1 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='inline-radio-input'>
                    <div className="inline-radio-row">
                        <div className="inline-radio">
                            <label>
                                <span>
                                    Own
                                </span>
                                <input
                                    type='radio'
                                    name="home_type"
                                    value="own"
                                    checked={formData.home_type === "own"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="inline-radio">
                            <label>
                                <span>
                                    Rent
                                </span>
                                <input
                                    type='radio'
                                    name="home_type"
                                    value="rent"
                                    checked={formData.home_type === "rent"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Round to Nearest Dollar</span>
                    <span className='dollar-input'>
                        <input type='text' className='' placeholder='Monthly Payment' value={formData.monthly_payment} name="monthly_payment" onChange={handleChangePayment} />
                    </span>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <div className="stepper-desc">
                    If you share a mortgage or rent payment with someone, please only include the portion you pay each month.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.home_type === "" ? <li>Do you rent or own your home?</li> : ""}
                        {formData.monthly_payment === "" ? <li>Enter monthly payable amount</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default HomeDetails;
