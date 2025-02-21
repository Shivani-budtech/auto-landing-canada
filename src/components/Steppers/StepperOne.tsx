/* eslint-disable jsx-a11y/alt-text */
import { form } from 'framer-motion/m';
import React, { useState } from 'react';


const StepperOne = ({ formData, setFieldValue, nextStep, prevStep, errors,touched,total_steps,alcStep }) => {
    const carTypes = [
        {
            'title' : 'Coupe',
            'image' : 'coupe.webp',
            'val': 'Coupe'
        },
        {
            'title': 'Hatchback',
            'image': 'hatchback.webp',
            'val': 'Hatchback'
        },
        {
            'title': 'Sedan',
            'image': 'sedan.webp',
            'val': 'Sedan'
        },
        {
            'title': 'Minivan',
            'image': 'minivan.webp',
            'val': 'Minivan'
        },
        {
            'title': 'SUV & Crossover',
            'image': 'suv.webp',
            'val': 'SUV & Crossover'
        },
        {
            'title': 'Truck',
            'image': 'truck.webp',
            'val': 'Truck'
        },
    ];
    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <div className="stepper-title">Get Pre-Approved for the Car You Want at a Price You Can Afford</div>
                    <span className='stepper-question-title'>What type of vehicle are you looking for?</span>
                </div>
                
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-car-input'>
                    {Object.entries(carTypes).map(([key, car]) => (
                        <div key={key} className="car-radio">
                            <label>
                                <input
                                    type="radio"
                                    value={car.val}
                                    name="vehicle_type"
                                    className='sr-only'
                                    checked={formData.vehicle_type === car.val}
                                    onChange={(e) => setFieldValue("vehicle_type", e.target.value )}
                                 
                                    // onChange={(e) => {
                                    //     console.log("e", e.target?.value)
                                    // }}
                                />
                                <img src={require(`/images/cars/`+car.image)} />
                                <span>{car.title}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default StepperOne;
