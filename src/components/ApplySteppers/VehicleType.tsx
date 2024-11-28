/* eslint-disable jsx-a11y/alt-text */
import { form } from 'framer-motion/m';
import React, { useState } from 'react';

const VehicleType = ({ formData, setFormData, setalcStep }) => {
    const carTypes = [
        {
            'title': 'Coupe',
            'image': 'coupe.png',
            'val': 'Coupe'
        },
        {
            'title': 'Hatchback',
            'image': 'hatchback.png',
            'val': 'Hatchback'
        },
        {
            'title': 'Sedan',
            'image': 'sedan.png',
            'val': 'Sedan'
        },
        {
            'title': 'Minivan',
            'image': 'minivan.png',
            'val': 'Minivan'
        },
        {
            'title': 'SUV & Crossover',
            'image': 'suv.png',
            'val': 'SUV & Crossover'
        },
        {
            'title': 'Truck',
            'image': 'truck.png',
            'val': 'Truck'
        },
    ];
    const remainingSteps = 10 - 1 - 1;
    const remainingMinutes = Math.ceil((remainingSteps / 10) * 3);

    const [hasError, setHasError] = useState(0);
    const handleNext = () => {
        if (formData.vehicle_type === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('budget'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, vehicle_type: e.target.value });
    };
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
                                    onChange={handleChange}
                                />
                                <img src={require(`./images/cars/` + car.image)} />
                                <span>{car.title}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ? 
                    <ul>
                        {formData.vehicle_type == "" ? <li>Vehicle type is required</li> : ""}
                    </ul> : ""
                }
                    
            </div>
        </div>
    );
}

export default VehicleType;
