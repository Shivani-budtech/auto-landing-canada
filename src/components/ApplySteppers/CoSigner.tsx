import React, { useState } from 'react';

const CoSigner = ({ formData, setFormData, setalcStep, handleSubmit }) => {
    const [hasError, setHasError] = useState(0);
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, has_co_signer: e.target.value });
    };
    const handleNext = () => {
        if (formData.has_co_signer === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            if (formData.has_co_signer === "yes") {
                setalcStep('co_signer_name');
            } else if (formData.has_co_signer === "no") {
                handleSubmit();
            }
        }
    }
    return (
        <div className='stepper-content'>
            <div className="stepper-top-img">
                <img src={require(`./images/success_application.png`)} />
            </div>
            <div className="stepper-application-title">
                Would you like to add co-signer?
            </div>
            <div className='stepper-input'>
                <div className='inline-radio-input'>
                    <div className="inline-radio-row">
                        <div className="inline-radio">
                            <label>
                                <span>
                                    Yes
                                </span>
                                <input
                                    type='radio'
                                    name="has_co_signer"
                                    value="yes"
                                    checked={formData.has_co_signer === "yes"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="inline-radio">
                            <label>
                                <span>
                                    No
                                </span>
                                <input
                                    type='radio'
                                    name="has_co_signer"
                                    value="no"
                                    checked={formData.has_co_signer === "no"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.has_co_signer === "" ? <li>Please select one</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default CoSigner;
