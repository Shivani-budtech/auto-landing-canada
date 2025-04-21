import React,{ useState } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";


const DateOfBirth = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const today = new Date().toISOString().split("T")[0];

    const handleBack = () => {
        setHasError(0);
        setalcStep('citizen_details');
    }
    const handleBlur = (e) => {
        const inputDate = e.target.value;

        // Check if the entered date is not greater than today's date
        if (inputDate > today || inputDate < "1970-01-01") {
            setFormData({ ...formData, birth_date: "" });
        }
    }

    const handleNext = () => {
        if (formData.birth_date === "") {
            setHasError(1);
        } else {
            setHasError(0);
            setalcStep('full_name');
        }
    }
    const handleChange = (selectedDates, dateStr) => {
        setHasError(0);
        setFormData({ ...formData, birth_date: dateStr });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>What is your date of birth?</h2>
                </div>
                <span className='stepper-time'>1 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Select Date of Birth</span>
                    <span className='dollar-input calender'>
                        {/* <input type='date' className='' value={formData.birth_date} name="birth_date" max={today} onChange={handleChange} onBlur={handleBlur} /> */}

                        <Flatpickr
                            name="birth_date" // Name attribute for form submission
                            value={formData.birth_date} // Controlled input
                            onChange={handleChange} // Trigger when date is selected
                            options={{
                                dateFormat: "d/m/Y", // Your preferred format
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
                        {formData.birth_date === "" ? <li>Enter Date of birth</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default DateOfBirth;
