import * as Yup from 'yup';

const validationSchemas = [
    Yup.object({
        vehicle_type: Yup.string().required('Vehicle type is required')
    }),
    Yup.object({
        budget: Yup.string().required('Budget is required'),
    }),
    Yup.object({
        trade_in: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        credit_rating: Yup.string().required('Credit rating is required'),
    }),
    Yup.object({
        employment_status: Yup.string().required('Select employment status'),
    }),
    Yup.object({
        income_detail: Yup.string().required('Please select one from above'),
    }),
    Yup.object({
        income_amount: Yup.string().required('Enter Income amount'),
    }),
    Yup.object({
        income_year: Yup.string().required('Please select Year'),
        income_month: Yup.string().required('Please select Month'),
    }),
    Yup.object({
        company_name: Yup.string().required('Enter company name'),
        job_title: Yup.string().required('Enter job title'),
    }),
    Yup.object({
        address: Yup.string().required('Enter address before continue'),
    }),
    Yup.object({
        address_year: Yup.string().required('Please select Year'),
        address_month: Yup.string().required('Please select Month'),
    }),
    Yup.object({
        home_type: Yup.string().required('Please select type of home'),
        monthly_rent: Yup.string().required('Enter Monthly rent amount'),
    }),
    Yup.object({
        canadian_licence: Yup.string().required('Do you have canadian license'),
        canadian_citizen: Yup.string().required('Do you have canadian citizenship'),
    }),
    Yup.object({
        birth_date: Yup.string().required('Plase enter date of birth'),
    }),
    Yup.object({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
    }),
    Yup.object({
        email: Yup.string().required('Email is required').email('Enter a valid email'),
        phone_number: Yup.string().required('Phone number is required').matches(/^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?[\d\s.-]{7,10}$/,'Enter a valid Canadian mobile number'),
    })
    // Define schemas for each step
    // Continue for each field grouping, up to step 15
];
export default validationSchemas;