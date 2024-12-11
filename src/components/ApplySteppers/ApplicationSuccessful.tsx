import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ApplicationSuccessful = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleNext = (e) => {
        if (formData.sms_consent === "" || formData.sms_consent === "no") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('upload_id'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setHasError(0);
        setFormData({ ...formData, sms_consent: (checked ? "yes" : "no") });
    };

    return (
        <div className='stepper-content'>
            <div className="stepper-top-img">
                <img src={require(`./images/success_application.png`)} />
            </div>
            <div className="stepper-application-title">
                Application Successful!
            </div>
            <div className="stepper-application-number">
                Confirmation Number: 1EFACE
            </div>
            <div className="stepper-application-desc-title">
                A confirmation email will be sent to you shortly
            </div>
            <div className="stepper-input consent" style={{ marginTop: "50px" }}>
                <input type="checkbox" name="sms_consent" id="sms_consent" value="yes" checked={formData.sms_consent === "yes"} onChange={handleChange} />
                <label htmlFor="sms_consent">I consent to receive electronic messages regarding Auto lending Canada's products, services, and related offerings and understand that I can withdraw my consent at any time. More information is provided in our <Link to="/">Privacy Policy</Link> and <Link to="/">General Terms and Services</Link></label>
            </div>
            <div className='stepper-btn' style={{ marginTop: "40px" }}>
                <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.sms_consent === "" || formData.sms_consent === "no" ? <li>Please check consent</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default ApplicationSuccessful;
