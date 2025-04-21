import React,{ useState } from 'react';


const CitizenDetails = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('home_details');
    }

    const handleNext = () => {
        if (formData.canadian_citizen === "" || formData.canadian_licence === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('date_of_birth'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, canadian_citizen: e.target.value });
    };
    const handleChangeLicence = (e) => {
        setHasError(0);
        setFormData({ ...formData, canadian_licence: e.target.value });
    }
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>Are you a Canadian citizen or permanent resident?</h2>
                </div>
                <span className='stepper-time'>1 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='inline-radio-input'>
                    <div className="inline-radio-row-gap">
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    Yes
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_citizen"
                                    value="yes"
                                    checked={formData.canadian_citizen === "yes"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    No
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_citizen"
                                    value="no"
                                    checked={formData.canadian_citizen === "no"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>Do you hold a valid Canadian driver's license?</h2>
                </div>
            </div>
            <div className="stepper-input">
                <div className='inline-radio-input'>
                    <div className="inline-radio-row-gap">
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    Yes
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_licence"
                                    value="yes"
                                    checked={formData.canadian_licence === "yes"}
                                    onChange={handleChangeLicence} />
                            </label>
                        </div>
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    No
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_licence"
                                    value="no"
                                    checked={formData.canadian_licence === "no"}
                                    onChange={handleChangeLicence} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stepper-btn'>
                <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.canadian_citizen === "" ? <li>Are you canadian citizen?</li> : ""}
                        {formData.canadian_licence === "" ? <li>Do you have a valid Canadian driver's licence?</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default CitizenDetails;
