/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

const VehicleType = ({ formData, setFormData, setalcStep }) => {
    const carTypes = [
        {
            'title': 'Coupe',
            'image': 'coupe.webp',
            'val': 'Coupe',
            'alt':'A sleek green coupe with sporty design features, alloy wheels, and a modern profile, set against a black background.'
        },
        {
            'title': 'Hatchback',
            'image': 'hatchback.webp',
            'val': 'Hatchback',
            'alt':'A sleek, red hatchback car showcasing a sporty design, featuring black alloy wheels and aerodynamic body lines.'
        },
        {
            'title': 'Sedan',
            'image': 'sedan.webp',
            'val': 'Sedan',
            'alt':'Side view of a sleek blue sedan featuring a modern design, alloy wheels, and a streamlined body shape.'
        },
        {
            'title': 'Minivan',
            'image': 'minivan.webp',
            'val': 'Minivan',
            'alt':'A sleek black minivan side profile with a modern design, featuring tinted windows and sporty black alloy wheels.'
        },
        {
            'title': 'SUV & Crossover',
            'image': 'suv.webp',
            'val': 'SUV & Crossover',
            'alt':'A white SUV parked sideways, showcasing its sleek design, silver alloy wheels, and black accents along the bottom.'
        },
        {
            'title': 'Truck',
            'image': 'truck.webp',
            'val': 'Truck',
            'alt':'Gray pickup truck with a stylish profile, featuring a spacious cab and robust wheels, showcasing its TRD design elements.'
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
    // const handleChange = (e) => {
    //     setHasError(0);
    //     setFormData({ ...formData, vehicle_type: e.target.value });
    // };
    const handleChange = (e) => {
        const selectedValue = e.target.value;
      
        setFormData(prev => ({ ...prev, vehicle_type: selectedValue }));
        setHasError(0);
        // setalcStep('budget'); // ✅ Move to next step immediately
        setTimeout(() => {
            setalcStep('budget');
          }, 400);
      };
      
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <div className="stepper-title">Secure Pre-Approval for Your Dream Car at a Price That Fits Your Budget!</div>
                    <h2 className='stepper-question-title'>What kind of vehicle are you interested in?</h2>
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
                                <img src={`/images/cars/${car.image}`} alt={`${car.alt}`} className="cursor-pointer"/>
                                <h3>{car.title}</h3>
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
