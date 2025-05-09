import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import '../responsive.css';
import '../stepper.css';
import StepperEight from './Steppers/StepperEight.tsx';
import StepperEleven from './Steppers/StepperEleven.tsx';
import StepperFifteen from './Steppers/StepperFifteen.tsx';
import StepperFive from './Steppers/StepperFive.tsx';
import StepperFour from './Steppers/StepperFour.tsx';
import StepperFourteen from './Steppers/StepperFourteen.tsx';
import StepperNine from './Steppers/StepperNine.tsx';
import StepperOne from './Steppers/StepperOne.tsx';
import StepperSeven from './Steppers/StepperSeven.tsx';
import StepperSeventeen from './Steppers/StepperSeventeen.tsx';
import StepperSix from './Steppers/StepperSix.tsx';
import StepperSixteen from './Steppers/StepperSixteen.tsx';
import StepperTen from './Steppers/StepperTen.tsx';
import StepperThirteen from './Steppers/StepperThirteen.tsx';
import StepperThree from './Steppers/StepperThree.tsx';
import StepperTwelve from './Steppers/StepperTwelve.tsx';
import StepperTwo from './Steppers/StepperTwo.tsx';
import validationSchemas from './validationSchemas.tsx';


function ApplyNow() {

    const setFieldValueRef = useRef(null); 

    const { step } = useParams();

    const location = useLocation();
    const { vehicle_type } = location.state || {};
    console.log(vehicle_type);

    const initialValues = {
        'vehicle_type': '',
        'budget': '',
        'trade_in': '',
        'credit_rating': '',
        'employment_status': '',
        'income_detail': '',
        'income_amount': '',
        'income_year': '',
        'income_month': '',
        'company_name': '',
        'job_title': '',
        'address': '',
        'address_year': '',
        'address_month': '',
        'home_type': '',
        'monthly_rent': '',
        'canadian_citizen': '',
        'canadian_licence': '',
        'birth_date': '',
        'first_name': '',
        'last_name': '',
        'email': '',
        'phone_number': '',
    };
    const [alcStep,setAlcStep] = useState(0);

    // Navigation functions

    
    const nextStep = async (validateForm) => {
        const errors = await validateForm();
        if (Object.keys(errors).length === 0) {
            if (alcStep < steps.length - 1) {
                setAlcStep((prevStep) => prevStep + 1);
            } 
        }
    };


    const prevStep = () => {
        if (alcStep > 0) {
            setAlcStep((prevStep) => prevStep - 1);
        }
    };
    
    const steps = [
        <StepperOne />,
        <StepperTwo />,
        <StepperThree/>,
        <StepperFour />,
        <StepperFive />,
        <StepperSix />,
        <StepperSeven />,
        <StepperEight />,
        <StepperNine />,
        <StepperTen />,
        <StepperEleven />,
        <StepperTwelve />,
        <StepperThirteen />,
        <StepperFourteen />,
        <StepperFifteen />,
        <StepperSixteen />,
        <StepperSeventeen />
    ];
    
    const completionPercentage = (alcStep / (steps.length - 1)) * 100;

    useEffect(() => {
        if (vehicle_type && setFieldValueRef.current) {
            setFieldValueRef.current('vehicle_type', vehicle_type);
        }
    }, [vehicle_type]);

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchemas[alcStep]}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(data)=>{
                console.log("data",data)
            }}
        >
            {({ validateForm, setFieldValue, values, errors, touched }) => {

                setFieldValueRef.current = setFieldValue;

                const total_steps = steps.length;
                return (
                <div className='apply-stepper header-marging'>
                    <div className="stepper-progress-container">
                        <div className='stepper-progress'>
                            <div className='stepper-complete' style={{ width: completionPercentage +`%`}}>
                                <img src={require(`../images/stepper.webp`)} alt="Stepper" />
                            </div>
                        </div>
                    </div>
                    <div>{React.cloneElement(steps[alcStep], {
                        formData: values,
                        setFieldValue,
                        nextStep: () => nextStep(validateForm),
                        prevStep,
                        errors,
                        touched,
                        total_steps,
                        alcStep
                    })}</div>

                    <div className="error-messages">
                        {Object.keys(errors).length > 0 && (
                            <ul>
                                {Object.keys(errors).map((key) => (
                                    <li key={key} className="error-text">
                                        {errors[key]}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                
            )}}
        </Formik>
    )
}

export default ApplyNow;
