import React, { useEffect, useState } from 'react';
import '../stepper.css';
import '../responsive.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from "react-helmet-async";

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
import UploadId from './ApplySteppers/UploadId.tsx';
import CoSigner from './ApplySteppers/CoSigner.tsx';
import CoSignerName from "./ApplySteppers/CoSignerName.tsx";
import CoSignerEmploymentStatus from './ApplySteppers/CoSignerEmploymentStatus.tsx';
import CoSignerIncomeType from './ApplySteppers/CoSignerIncomeType.tsx';
import CoSignerMonthlyIncome from './ApplySteppers/CoSignerMonthlyIncome.tsx';
import CoSignerAnnualIncome from './ApplySteppers/CoSignerAnnualIncome.tsx';
import CoSignerHourlyIncome from './ApplySteppers/CoSignerHourlyIncome.tsx';
import CosignerDoYouWork from './ApplySteppers/CoSignerDoYouWork.tsx';
import CoSignerOtherIncomeSource from './ApplySteppers/CoSignerOtherIncomeSource.tsx';
import CoSignerYearsOfIncome from './ApplySteppers/CoSignerYearsOfIncome.tsx';
import CoSignerWhereDoYouWork from './ApplySteppers/CoSignerWhereDoYouWork.tsx';
import CoSignerHomeAddress from './ApplySteppers/CoSignerHomeAddress.tsx';
import CoSignerYearsOfLiving from './ApplySteppers/CoSignerYearsOfLiving.tsx';
import CoSignerHomeDetails from './ApplySteppers/CoSignerHomeDetails.tsx';
import CoSignerCitizenDetails from './ApplySteppers/CoSignerCitizenDetails.tsx';
import CoSignerDateOfBirth from './ApplySteppers/CoSignerDateOfBirth.tsx';
import CoSignerContactDetails from './ApplySteppers/CoSignerContactDetails.tsx';
import CoSignerVerificationCode from './ApplySteppers/CoSignerVerificationCode.tsx';
import CoSignerUploadId from './ApplySteppers/CoSignerUploadId.tsx';
import FinalStep from './ApplySteppers/FinalStep.tsx';
import { API_URL } from './Constant.tsx';


function PreApply() {

    const [alcStep, setalcStep] = useState('vehicle_type');
    const [isSubmiting, setIsSubmiting] = useState(0);
    const [completionPercentage, setCompletionPercentage] = useState(0);

    const [verificationId, setVerificationId] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const { vehicle_type } = location.state || {};

    const uniqueNumber = Math.floor(100000 + Math.random() * 900000);

    const [formData,setFormData] = useState({
        'unique_id': uniqueNumber,
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
        'sms_consent' : '',
        'driving_license_img' : '',
        'license_img': '',
        'has_co_signer': 'yes',
        'co_signer_first_name' : '',
        'co_signer_last_name' : '',
        'co_signer_employment_status': '',
        'co_signer_income_type': '',
        'co_signer_monthly_income': '',
        'co_signer_annual_income': '',
        'co_signer_hourly_income': '',
        'co_signer_hour_week': '',
        'co_signer_do_you_work': '',
        'co_signer_income_source': '',
        'co_signer_income_year': '',
        'co_signer_income_month': '',
        'co_signer_company_name': '',
        'co_signer_job_title': '',
        'co_signer_address': '',
        'co_signer_living_year': '',
        'co_signer_living_month': '',
        'co_signer_home_type': '',
        'co_signer_monthly_payment': '',
        'co_signer_canadian_citizen': '',
        'co_signer_canadian_licence': '',
        'co_signer_birth_date': '',
        'co_signer_email': '',
        'co_signer_phone_number': '',
        'co_signer_driving_license_img	' : ''
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
        co_signer_name: 10,
        co_signer_employment_status: 18,
        co_signer_do_you_work: 21,
        co_signer_income_source: 25,
        co_signer_income_type: 28,
        co_signer_annual_income: 34,
        co_signer_monthly_income: 43,
        co_signer_hourly_income: 46,
        co_signer_years_of_income: 50,
        co_signer_where_do_you_work: 53,
        co_signer_home_address: 62,
        co_signer_years_of_living: 65,
        co_signer_home_details: 68,
        co_signer_citizen_details: 71,
        co_signer_date_of_birth: 75,
        co_signer_contact_details: 81,
        co_signer_driving_license_img : 90
    };

    const handleStepChange = (newStep) => {
        setalcStep(newStep);
        setCompletionPercentage(stepPercentages[newStep]); // Set percentage statically

        window.history.pushState({ step: newStep }, `Step ${newStep}`, `#${newStep}`);
    };

    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state && event.state.step) {
                setalcStep(event.state.step);
                setCompletionPercentage(stepPercentages[event.state.step]);
            }
        };

        window.addEventListener('popstate', handlePopState);

        // Initialize the history state with the current step
        window.history.replaceState({ step: alcStep }, `Step ${alcStep}`, `#${alcStep}`);

        // Cleanup
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [alcStep]);

    const handleSubmit = async () => {
        if(!isSubmiting) {
            setIsSubmiting(1);
            try {
                const res = await axios.post(API_URL + 'submit-form', formData,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log(res.data);
                // navigate("/");
                setalcStep('final_step');
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmiting(0);
            }
        }
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
                return <ContactDetails formData={formData} setFormData={setFormData} setalcStep={handleStepChange} setVerificationId={setVerificationId} />
            case 'verification_code':
                return <VerificationCode formData={formData} setFormData={setFormData} setalcStep={handleStepChange} verificationId={verificationId} setVerificationId={setVerificationId}/>
            case 'application_success':
                return <ApplicationSuccessful formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'upload_id':
                return <UploadId formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer':
                return <CoSigner formData={formData} setFormData={setFormData} setalcStep={handleStepChange} handleSubmit={handleSubmit} />
            case 'co_signer_name':
                return <CoSignerName formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_employment_status':
                return <CoSignerEmploymentStatus formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_income_type':
                return <CoSignerIncomeType formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_monthly_income':
                return <CoSignerMonthlyIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_annual_income':
                return <CoSignerAnnualIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_hourly_income':
                return <CoSignerHourlyIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_do_you_work':
                return <CosignerDoYouWork formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_income_source':
                return <CoSignerOtherIncomeSource formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_years_of_income':
                return <CoSignerYearsOfIncome formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_where_do_you_work':
                return <CoSignerWhereDoYouWork formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_home_address':
                return <CoSignerHomeAddress formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />    
            case 'co_signer_years_of_living':
                return <CoSignerYearsOfLiving formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_home_details':
                return <CoSignerHomeDetails formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_citizen_details':
                return <CoSignerCitizenDetails formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_date_of_birth':
                return <CoSignerDateOfBirth formData={formData} setFormData={setFormData} setalcStep={handleStepChange} />
            case 'co_signer_contact_details':
                return <CoSignerContactDetails formData={formData} setFormData={setFormData} setalcStep={handleStepChange} setVerificationId={setVerificationId} />
            case 'co_signer_verification_code':
                return <CoSignerVerificationCode formData={formData} setFormData={setFormData} setalcStep={handleStepChange} verificationId={verificationId} setVerificationId={setVerificationId} />
            case 'co_signer_upload_id':
                return <CoSignerUploadId formData={formData} setFormData={setFormData} setalcStep={handleStepChange} handleSubmit={handleSubmit} />
            case 'final_step':
                return <FinalStep />
        }
    };

    useEffect(() => {
        if (vehicle_type) {
            setFormData({ ...formData, vehicle_type: vehicle_type });
        }
    }, [vehicle_type]);

    return (
        <>
        <Helmet>
            <meta charSet="UTF-8" />
            <title>Pre-Approved Online Car Loan | Apply for New Car Loan</title>
            <meta 
                name="description" 
                content="Apply for a new car loan online and get pre-approved fast. With top lenders, it's a hassle-free process for your next vehicle. Start your online car loan now." 
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://autolendingcanada.ca/apply" />

            {/* Open Graph Metadata for Social Sharing */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Auto Lending Canada" />
            <meta property="og:title" content="Pre-Approved Online Car Loan | Apply for New Car Loan" />
            <meta property="og:image" content="https://autolendingcanada.ca/images/home-cars.webp" />
            <meta 
                property="og:description" 
                content="Apply for a new car loan online and get pre-approved fast. With top lenders, it's a hassle-free process for your next vehicle. Start your online car loan now." 
            />
            <meta property="og:url" content="https://autolendingcanada.ca/apply" />
            
            <script>
            {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '991486116394583');
                fbq('track', 'PageView');
            `}
            </script>
            <noscript>
            {`
                <img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=991486116394583&ev=PageView&noscript=1" />
            `}
            </noscript>

        </Helmet>
        <div className='apply-stepper header-marging'>
            {alcStep === "application_success" || alcStep === "upload_id" || alcStep === "co_signer_upload_id"  || alcStep === "co_signer" || alcStep === "final_step" ? ""  : 
                <div className="stepper-progress-container">
                    <div className='stepper-progress'>
                        <div className='stepper-complete' style={{ width: completionPercentage + `%` }}>
                            <img src={`/images/stepper.webp`} alt="Icon featuring a white car silhouette inside a red Canadian maple leaf on a red circular background."  />
                        </div>
                    </div>
                </div>
            }
            {renderContent()}
        </div>
        </>
    );
}

export default PreApply;