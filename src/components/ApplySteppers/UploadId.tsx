import React, { useState } from 'react';

const UploadId = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const handleFileChange = (event) => {
        setHasError(0);
        const file = event.target.files[0];
        setFormData({ ...formData, driving_license_img: file });
    };

    const handleNext = () => {
        if (formData.driving_license_img === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('co_signer'); // Move to the next step
        }
    }
    const handleSkip = () => {
        setHasError(0); // Clear error
        setalcStep('co_signer'); // Move to the next step
    }
    return (
        <div className='stepper-content'>
            <div className="stepper-top-img">
                <img src={require(`./images/success_application.png`)} />
            </div>
            <div className="stepper-application-title">
                Upload a photo of the front of your driver's license
            </div>
            <div className='upload-img-btn'>
                <input type="file" onChange={handleFileChange} id="fileInput" />
                <label htmlFor="fileInput" className='custom-file-input'>
                    <span>Select Photo to Upload</span>
                </label>
                {formData.driving_license_img ? <p>{formData.driving_license_img.name}</p> : <p>No file chosen</p>}
            </div>
            <div className="stepper-btn" style={{marginTop:"40px"}}>
                <button type="button" className="primary-btn" onClick={handleNext}>Continue</button>
            </div>
            <div className="p-link">
                <p onClick={handleSkip}>I don't have my ID</p>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.driving_license_img === "" ? <li>Upload valid id</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default UploadId;
