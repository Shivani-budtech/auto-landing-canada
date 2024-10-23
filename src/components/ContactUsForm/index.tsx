import React, { useState } from 'react';
import "./index.css";

function ContactUsForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile_no: "",
        message: "",
        consent: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    };
    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setFormData({
            ...formData,
            [name]: e.target.checked
        });
    };

    return (
        <section className='contact-us-sec'>
            <div className="sec-title">
                Get in touch!
                <span>
                    Need assistance? Fill out the form, and we’ll get in touch soon!
                </span>
            </div>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="form-input">
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
                            <div className="form-input">
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
                            <div className="form-input">
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
                            <div className="form-input">
                                <input
                                    type="number"
                                    id="mobile_no"
                                    name="mobile_no"
                                    value={formData.mobile_no}
                                    onChange={handleInputChange}
                                    placeholder='Mobile Number'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-row'>
                        <div className='contact-col'>
                            <div className="form-input">
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
                                checked={formData.consent}
                                onChange={handleCheckboxChange}
                            />
                            I agree to the terms and conditions
                        </label>
                    </div>
                    <div className='contact-form-row'>
                        <button type='submit' className="primary-btn">
                            Send Questions
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactUsForm;
