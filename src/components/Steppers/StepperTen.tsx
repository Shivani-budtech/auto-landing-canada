import React, { useState } from 'react';
import { Link } from "react-router-dom";

const StepperTen = ({ formData, setFieldValue, nextStep, prevStep, errors, touched, total_steps, alcStep }) => {
    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);
    const [isApproved, setIsApproved] = useState("pending");
    const checkForApproval = () => {
        setIsApproved("approved")
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Where are you looking for a vehicle?</span>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Home Address</span>
                    <span className='text-input'>
                        <input type='text' className='' value={formData.address} name="address" onChange={(e) => setFieldValue("address", e.target.value )} />
                    </span>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Back</button>
                    <button type='button' className='primary-btn' onClick={checkForApproval}>Continue</button>
                </div>
                <div className="stepper-desc">
                    Providing your location helps find the best deals near you.
                </div>
            </div>
            {isApproved === "pending" ? (
                ""
            ) : isApproved === "approved" ? (
                <div className='approval-pop'>
                    <div className="approval-popoverlay"></div>
                    <div className='approval-pop-container'>
                        <img src={require(`../../images/approved.png`)} />
                        <div className="approve-pop-title">
                            Congratulations!
                        </div>
                        <div className="approve-pop-address">
                            You Qualify for Pre-Approval in:
                            <h1>Hamilton, Ontario</h1>
                        </div>
                        <div className="approve-pop-content">
                            <p>
                                Become a Premium Member of the Auto Lending Canada Affinity Program and get pre-approved for your car loan.
                            </p>
                            <p>
                                    Membership in the Affinity Program is governed by the Rules for Membership in Auto Lending Canada Affinity Program <Link to="/"><b>(available here)</b></Link>
                            </p>
                            <p>
                                    By clicking on the Continue Button, I confirm my agreement to Auto Lending Canada' <Link to="/"><b>General Terms of Service</b></Link>, my consent to Auto Lending Canada and all members of Auto Lending Canada Company recording all my calls with them for quality assurance and training purposes, and my consent to Auto Lending Canada, car dealers and lenders obtaining credit reports about me to facilitate my application for a car loan.
                            </p>
                        </div>
                        <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                    </div>
                </div>
            ) : isApproved === "rejected" ? (
                <div className='approval-pop'>
                    <div className="approval-popoverlay"></div>
                    <div className='approval-pop-container'>
                        <img src={require(`../../images/rejected.png`)} />
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
                        <Link to="/" className="primary-btn">Go Back</Link>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default StepperTen;
