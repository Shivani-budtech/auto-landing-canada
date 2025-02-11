/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

const VehicleType = ({ formData, setFormData, setalcStep }) => {
    const carTypes = [
        {
            'title': 'Coupe',
            'image': 'coupe.webp',
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
                    <div className="stepper-title">Secure Pre-Approval for Your Dream Car at a Price That Fits Your Budget!</div>
                    <span className='stepper-question-title'>What kind of vehicle are you interested in?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
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
                                <img src={require(`./images/cars/` + car.image)} loading="eager" />
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
                        {formData.vehicle_type === "" ? <li>Vehicle type is required</li> : ""}
                    </ul> : ""
                }
                    
            </div>
        </div>
    );
}

export default VehicleType;
