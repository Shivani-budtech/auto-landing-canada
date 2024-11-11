import React, { useState } from 'react';
import StepperOne from './Steppers/StepperOne.tsx';
import StepperTwo from './Steppers/StepperTwo.tsx';
import StepperThree from './Steppers/StepperThree.tsx';
import StepperFour from './Steppers/StepperFour.tsx';
import StepperFive from './Steppers/StepperFive.tsx';
import StepperSix from './Steppers/StepperSix.tsx';
import StepperSeven from './Steppers/StepperSeven.tsx';
import StepperEight from './Steppers/StepperEight.tsx';
import StepperNine from './Steppers/StepperNine.tsx';
import StepperTen from './Steppers/StepperTen.tsx';
import StepperEleven from './Steppers/StepperEleven.tsx';
import StepperTwelve from './Steppers/StepperTwelve.tsx';
import StepperThirteen from './Steppers/StepperThirteen.tsx';
import StepperFourteen from './Steppers/StepperFourteen.tsx';
import StepperFifteen from './Steppers/StepperFifteen.tsx';
import StepperSixteen from './Steppers/StepperSixteen.tsx';
import '../stepper.css';
import '../responsive.css';


function ApplyNow() {
    
    const [alcStep,setAlcStep] = useState(0);
    const [formData, setFormData] = useState({
        'vehicle_type' : '',
        'budget' :'',
        'trade_in' : '',
        'credit_rating' : '',
        'employment_status' : '',
        'income_detail' : '',
        'income_amount' : '',
        'income_year': '',
        'income_month' : '',
        'company_name': '',
        'job_title' : '',
        'address': '',
        'address_year' : '',
        'address_month': '',
        'home_type' : '',
        'monthly_rent': '',
        'canadian_citizen' : '',
        'canadian_licence' : '',
        'birth_date': '',
        'first_name': '',
        'last_name': '',
        'email' : '',
        'phone_number' : '',
    });
    // Navigation functions
    const nextStep = () => {
        if (alcStep < steps.length - 1) {
            setAlcStep((prevStep) => prevStep + 1);
        }
    };

    const prevStep = () => {
        if (alcStep > 0) {
            setAlcStep((prevStep) => prevStep - 1);
        }
    };
    
    const steps = [
        <StepperOne formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperThree formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperFour formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperFive formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperSix formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperSeven formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperEight formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperNine formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperTen formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperEleven formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperTwelve formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperThirteen formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperFourteen formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperFifteen formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
        <StepperSixteen formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
    ];
    
    const completionPercentage = (alcStep / (steps.length - 1)) * 100;

    return (
        <div className='apply-stepper header-marging'>
            <div className="stepper-progress-container">
                <div className='stepper-progress'>
                    <div className='stepper-complete' style={{ width: completionPercentage +`%`}}>
                        <img src={require(`../images/stepper.png`)} alt="Stepper" />
                    </div>
                </div>
            </div>
            <div>{steps[alcStep]}</div>
        </div>
    );
}

export default ApplyNow;
