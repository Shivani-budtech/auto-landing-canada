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

function PreApply() {

    const [alcStep, setalcStep] = useState('vehicle_type');
    const completionPercentage = (1 / (10 - 1)) * 100;

    const [formData,setFormData] = useState({
        'vehicle_type': '',
        'budget': '',
        'trade_in': '',
        'credit_rating': '',
        'employment_status': '',
        'income_type':'',
        'monthly_income' : '',
        'hourly_income' : '',
        'hour_week' : '',
        'do_you_work' : '',
        'income_source': ''
    })

    const renderContent = () => {
        switch (alcStep) {
            case 'vehicle_type':
                return <VehicleType formData={formData} setFormData={setFormData} setalcStep={setalcStep}/>;
            case "budget":
                return <Budget formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case "trade_in":
                return <TradeIn formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case "credit_rating":
                return <CreditRating formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case "employment_status":
                return <EmploymentStatus formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case 'income_type':
                return <IncomeType formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case 'monthly_income':
                return <MonthlyIncome formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case 'annual_income':
                return <AnnualIncome formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case 'hourly_income':
                return <HourlyIncome formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case 'do_you_work':
                return <DoYouWork formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
            case 'income_source':
                return <OtherIncomeSource formData={formData} setFormData={setFormData} setalcStep={setalcStep} />
        }
    };



    return (
        <div className='apply-stepper header-marging'>
            <div className="stepper-progress-container">
                <div className='stepper-progress'>
                    <div className='stepper-complete' style={{ width: completionPercentage + `%` }}>
                        <img src={require(`../images/stepper.png`)} alt="Stepper" />
                    </div>
                </div>
            </div>
            {renderContent()}
        </div>
    );
}

export default PreApply;