import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";

const CoSignerHomeAddress = ({ formData, setFormData, setalcStep }) => {
    const [isApproved, setIsApproved] = useState("pending");
    const [hasError, setHasError] = useState(0);

    const handlePlaceSelected = (place) => {
        console.log("Selected Place:", place);
        const address = place.formatted_address;
        console.log("Address:", address);
        setHasError(0);
        setFormData({ ...formData, co_signer_address: address });
    };

    const checkForApproval = () => {
        if (formData.co_signer_address === "") {
            setHasError(1);
        } else {
            setHasError(0);
            setIsApproved("approved")
        }
    };

    const handleBack = () => {
        setalcStep('co_signer_where_do_you_work');
    }

    const handleNext = () => {
        console.log("123");
        setalcStep('co_signer_years_of_living');
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_address: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>In which location are you searching for a vehicle?</span>
                </div>
                <span className='stepper-time'>2 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Home Address</span>
                    <span className='text-input'>
                        <Autocomplete
                            apiKey="AIzaSyDisxeuwxGC2xoZwvUa1VPiOBzVBTNG2TA"
                            onPlaceSelected={handlePlaceSelected}
                            options={{
                                types: ["geocode"],
                                componentRestrictions: { country: "ca" },
                            }}
                            placeholder="Search for an address"
                            className="autocomplete-input"
                            value={formData.co_signer_address}
                            onChange={handleChange}
                        />
                        {/* <input type='text' className='' value={formData.co_signer_address} name="co_signer_address" onChange={handleChange} /> */}
                    </span>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={checkForApproval}>Continue</button>
                </div>
                <div className="stepper-desc">
                    Sharing your location helps us find the best deals available in your area.
                </div>
                <div className="error-messages">
                    {hasError === 1 ?
                        <ul>
                            {formData.co_signer_address === "" ? <li>Enter address</li> : ""}
                        </ul> : ""
                    }
                </div>
            </div>
            {isApproved === "pending" ? (
                ""
            ) : isApproved === "approved" ? (
                <div className='approval-pop'>
                    <div className="approval-popoverlay"></div>
                    <div className='approval-pop-container'>
                        <img src={require(`../../images/approved.webp`)} alt="" />
                        <div className="approve-pop-title">
                            Congratulations!
                        </div>
                        <div className="approve-pop-address">
                            You Qualify for Pre-Approval in:
                                <h1>{formData.co_signer_address }</h1>
                        </div>
                        <div className="approve-pop-content">
                            <p>
                                Join the Auto Lending Canada Advantage Membership as a Premium Member and enjoy exclusive benefits, including faster pre-approvals and enhanced support for your car loan application.
                            </p>
                            <p>
                                    Membership is subject to the Rules for Membership in the Auto Lending Canada Advantage Membership Program, viewable <a href="https://autolendingcanada.ca/membership_programme" target="_blank"><b>[here]</b></a>.
                            </p>
                            <p>
                                    By clicking “Continue,” I confirm that I agree to Auto Lending Canada’s <a href="https://autolendingcanada.ca/terms_of_use" target='_blank'>Terms of Use</a>, <a href="https://autolendingcanada.ca/privacy_policy" target="_blank">Privacy Policy</a>, consent to the recording of my calls for quality assurance and training purposes, and authorize Auto Lending Canada, participating car dealers, and lenders to access my credit reports to process my car loan application.
                            </p>
                        </div>
                        <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                    </div>
                </div>
            ) : isApproved === "rejected" ? (
                <div className='approval-pop'>
                    <div className="approval-popoverlay"></div>
                    <div className='approval-pop-container'>
                        <img src={require(`../../images/rejected.webp`)} alt="" />
                        <div className="approve-pop-title">
                            Failed
                        </div>
                        <div className="approve-pop-address">
                            You are not Qualify for Pre-Approval in:
                            <h1>Canadore, Ontario</h1>
                        </div>
                        <div className="approve-pop-content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <button type='button' className='primary-btn' onClick={handleBack}>Go Back</button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
export default CoSignerHomeAddress;