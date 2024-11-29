import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ApplicationSuccessful = ({ formData, setFormData, setalcStep }) => {
    const handleNext = (e) => {
        
    }

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
                <input type="checkbox" name="sms_consent" id="sms_consent"/>
                <label for="sms_consent">I consent to receive electronic messages regarding Auto lending Canada's products, services, and related offerings and understand that I can withdraw my consent at any time. More information is provided in our <Link to="/">Privacy Policy</Link> and <Link to="/">General Terms and Services</Link></label>
            </div>
            <div className='stepper-btn' style={{ marginTop: "40px" }}>
                <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
            </div>
                
        </div>
    );
}

export default ApplicationSuccessful;
