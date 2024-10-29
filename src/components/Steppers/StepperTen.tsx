import React from 'react';


const StepperTen = ({ formData, setFormData, nextStep, prevStep }) => {

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Where are you looking for a vehicle?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide">Home Address</span>
                    <span className='text-input'>
                        <input type='text' className='' value={formData.address} name="address" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                    </span>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Previous</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default StepperTen;
