import React, { useState } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";


const CoSignerDateOfBirth = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const today = new Date().toISOString().split("T")[0];

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer_citizen_details');
    }

    const handleNext = () => {
        if (formData.co_signer_birth_date === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('co_signer_contact_details');
        }
    }
    const handleChange = (selectedDates, dateStr) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_birth_date: dateStr });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your date of birth?</span>
                </div>
                <span className='stepper-time'>1 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Select Date of Birth</span>
                    <span className='dollar-input calender'>
                        {/* <input type='date' className='' value={formData.co_signer_birth_date} name="co_signer_birth_date" onChange={handleChange} onBlur={handleBlur} /> */}
                        <Flatpickr
                            name="co_signer_birth_date" 
                            value={formData.co_signer_birth_date}
                            onChange={handleChange}
                            options={{
                                dateFormat: "d/m/Y",
                                minDate: "01/01/1970",
                                maxDate: "today",
                                disableMobile: true
                            }}
                        />
                    </span>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.co_signer_birth_date === "" ? <li>Enter Date of birth</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerDateOfBirth;
