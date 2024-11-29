import React,{ useState } from 'react';


const DateOfBirth = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('citizen_details');
    }

    const handleNext = () => {
        if (formData.birth_date === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('full_name'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, birth_date: e.target.value });
    };
    return (
        <div className='stepper-content'>
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
                        <input type='date' className='' value={formData.birth_date} name="birth_date" onChange={handleChange} />
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
