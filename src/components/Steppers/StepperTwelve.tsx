import React from 'react';


const StepperTwelve = ({ formData, setFormData, nextStep, prevStep }) => {

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Do you rent or own your home?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
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
                                    onChange={(e) => setFormData({ ...formData, home_type: e.target.value })} />
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
                                    onChange={(e) => setFormData({ ...formData, home_type: e.target.value })} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='stepper-text-input'>
                    <span className="input-guide">Round to Nearest Dollar</span>
                    <span className='dollar-input'>
                        <input type='number' className='' value={formData.monthly_rent} name="monthly_rent" onChange={(e) => setFormData({ ...formData, monthly_rent: e.target.value })} />
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

export default StepperTwelve;