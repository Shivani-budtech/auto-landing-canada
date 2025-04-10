import React, { useState } from 'react';
import "./index.css";
import '../../responsive.css';
import axios from 'axios';
import { API_URL } from '../Constant.tsx';

function ContactUsForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile_no: "",
        message: ""
    });
    const [isSubmiting, setIsSubmiting] = useState(0);
    const [consent, setConsent] = useState(false);
    const [success,setSuccess] = useState({
        success : false,
        message : ""
    })

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "");

        if (cleaned.length <= 3) {
            return cleaned;
        } else if (cleaned.length <= 6) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
        }
    };

    const handleChangePhone = (e) => {
        const formattedNumber = formatPhoneNumber(e.target.value);
        setFormData({ ...formData, mobile_no: formattedNumber });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!formData.mobile_no || !phoneRegex.test(formData.mobile_no)) {
            alert("Enter valid mobile number");
        } else {
            if (consent) {
                if (!isSubmiting) {
                    setIsSubmiting(1);
                    try {
                        const res = await axios.post(API_URL + 'submit-contact', formData, {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        });
                        console.log(res.data);
                        setSuccess({
                            success: true,
                            message: "Thank you for your submission! We have received your information and will be in touch shortly to discuss your request."
                        })
                    } catch (error) {
                        console.error('Error submitting form:', error);
                        setSuccess({
                            success: false,
                            message: "Something goes wrong!!"
                        })
                    } finally {
                        setIsSubmiting(0);
                        setFormData({
                            first_name: "",
                            last_name: "",
                            email: "",
                            mobile_no: "",
                            message: ""
                        });
                        setConsent(false);

                    }
                }
            } else {
                alert("Agree terms and condition")
            }
        }
        
    };
    const handleCheckboxChange = (e) => {
        setConsent(e.target.checked)
    };


    return (
        <section className='contact-us-sec contact-us-form container'>
            <div className="sec-title">
                <h2 style={{fontSize:"inherit"}}>Get in touch!</h2>
                <h3>
                    Need assistance? Fill out the form, and we’ll get in touch soon!
                </h3>
            </div>
            {
            (success.message) ? 
                <div className={success.success ? "successful-submit" : "error-submit"}>
                    {success.message}
                </div> : 
                ""
            }
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="form-input user-input">
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    placeholder='First Name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="form-input user-input">
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    placeholder='Last Name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="form-input email-input">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder='Email Address'
                                    required
                                />
                            </div>
                        </div>
                        <div className='contact-col'>
                            <div className="form-input phone-input">
                                <input
                                    type="text"
                                    id="mobile_no"
                                    name="mobile_no"
                                    value={formData.mobile_no}
                                    onChange={handleChangePhone}
                                    placeholder='Mobile Number'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="form-input support-input">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder='How can we help?'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-row'>
                        <label className='consent-check'>
                            <input
                                type="checkbox"
                                name="consent"
                                checked={consent}
                                onChange={handleCheckboxChange}
                            />
                            By submitting this form, you are consenting to receive text message communications from Auto Lending Canada.
                        </label>
                    </div>
                    <div className='contact-form-row'>
                        <button type='submit' disabled={ (consent) ? false : true } className="primary-btn">
                            Send Questions
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactUsForm;
