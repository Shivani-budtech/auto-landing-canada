import React, { useEffect, useState } from 'react';
import '../stepper.css';
import '../responsive.css';

import VehicleType from './ApplySteppers/VehicleType.tsx';
import Budget from './ApplySteppers/Budget.tsx';
import TradeIn from './ApplySteppers/TradeIn.tsx';
import CreditRating from './ApplySteppers/CreditRating.tsx';
import EmploymentStatus from './ApplySteppers/EmploymentStatus.tsx';
import IncomeType from './ApplySteppers/IncomeType.tsx';
import MonthlyIncome from './ApplySteppers/MonthlyIncome.tsx';
import AnnualIncome from './ApplySteppers/AnnualIncome.tsx';
import HourlyIncome from './ApplySteppers/HourlyIncome.tsx';
import DoYouWork from './ApplySteppers/DoYouWork.tsx';
import OtherIncomeSource from './ApplySteppers/OtherIncomeSource.tsx';
import YearsOfIncome from './ApplySteppers/YearsOfIncome.tsx';
import WhereDoYouWork from './ApplySteppers/WhereDoYouWork.tsx';
import HomeAddress from './ApplySteppers/HomeAddress.tsx';
import YearsOfLiving from './ApplySteppers/YearsOfLiving.tsx';
import HomeDetails from './ApplySteppers/HomeDetails.tsx';
import CitizenDetails from './ApplySteppers/CitizenDetails.tsx';
import DateOfBirth from './ApplySteppers/DateOfBirth.tsx';
import FullName from './ApplySteppers/FullName.tsx';
import ContactDetails from './ApplySteppers/ContactDetails.tsx';
import VerificationCode from './ApplySteppers/VerificationCode.tsx';
import ApplicationSuccessful from './ApplySteppers/ApplicationSuccessful.tsx';


function PreApply() {

    const [alcStep, setalcStep] = useState('vehicle_type');
    const [completionPercentage, setCompletionPercentage] = useState(0);

    const [formData,setFormData] = useState({
        'vehicle_type': '',
        'budget': '',
        'trade_in': '',
        'credit_rating': '',
        'employment_status': '',
        'income_type':'',
        'monthly_income' : '',
        'annual_income' : '',
        'hourly_income' : '',
        'hour_week' : '',
        'do_you_work' : '',
        'income_source': '',
        'income_year': '',
        'income_month' : '',
        'company_name': '',
        'job_title' : '',
        'address' : '',
        'living_year': '',
        'living_month' : '',
        'home_type' : '',
        'monthly_payment' : '',
        'canadian_citizen' : '',
        'canadian_licence' : '',
        'birth_date' : '',
        'first_name' : '',
        'last_name': '',
        'email': '',
        'phone_number' : '',
        'sms_consent' : ''
    });

    const stepPercentages = {
        vehicle_type: 0,
        budget: 9,
        trade_in: 12,
        credit_rating: 15,
        employment_status: 18,
        do_you_work: 21,
        income_source: 25,
        income_type: 28,
        annual_income: 34,
        monthly_income: 43,
        hourly_income: 46,
        years_of_income: 50,
        where_do_you_work: 53,
        home_address: 62,
        years_of_living: 65,
        home_details: 68,
        citizen_details: 71,
        date_of_birth: 75,
        full_name: 78,
        contact_details: 81,
        verification_code: 90,
    };

    const handleStepChange = (newStep) => {
        setalcStep(newStep);
        setCompletionPercentage(stepPercentages[newStep]); // Set percentage statically
    };

    const renderContent = () => {
        switch (alcStep) {
            case 'vehicle_type':
                return <VehicleType formData={formData} setFormData={setFormData} setalcStep={handleStepChange}/>;
            case "budget":
                return <Budget formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case "trade_in":
                return <TradeIn formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case "credit_rating":
                return <CreditRating formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case "employment_status":
                return <EmploymentStatus formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'income_type':
                return <IncomeType formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'monthly_income':
                return <MonthlyIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'annual_income':
                return <AnnualIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'hourly_income':
                return <HourlyIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'do_you_work':
                return <DoYouWork formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'income_source':
                return <OtherIncomeSource formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'years_of_income':
                return <YearsOfIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'where_do_you_work':
                return <WhereDoYouWork formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'home_address':
                return <HomeAddress formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'years_of_living':
                return <YearsOfLiving formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'home_details':
                return <HomeDetails formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'citizen_details':
                return <CitizenDetails formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'date_of_birth':
                return <DateOfBirth formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'full_name':
                return <FullName formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'contact_details':
                return <ContactDetails formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'verification_code':
                return <VerificationCode formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'application_success':
                return <ApplicationSuccessful formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
        }
    };



    return (
        <div className='apply-stepper header-marging'>
            {alcStep === "application_success" ? "" : 
                <div className="stepper-progress-container">
                    <div className='stepper-progress'>
                        <div className='stepper-complete' style={{ width: completionPercentage + `%` }}>
                            <img src={require(`../images/stepper.png`)} alt="Stepper" />
                        </div>
                    </div>
                </div>
            }
            {renderContent()}
        </div>
    );
}

export default PreApply;