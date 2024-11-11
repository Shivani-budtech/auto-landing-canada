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
        credit_rating: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        employment_status: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        income_detail: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        income_amount: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        income_year: Yup.string().required('Trade-in is required'),
        income_month: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        company_name: Yup.string().required('Trade-in is required'),
        job_title: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        address: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        address_year: Yup.string().required('Trade-in is required'),
        address_month: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        home_type: Yup.string().required('Trade-in is required'),
        monthly_rent: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        canadian_licence: Yup.string().required('Trade-in is required'),
        canadian_citizen: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        birth_date: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        first_name: Yup.string().required('Trade-in is required'),
        last_name: Yup.string().required('Trade-in is required'),
    }),
    Yup.object({
        email: Yup.string().required('Trade-in is required'),
        phone_number: Yup.string().required('Trade-in is required'),
    }),
    // Define schemas for each step
    // Continue for each field grouping, up to step 15
];
export default validationSchemas;