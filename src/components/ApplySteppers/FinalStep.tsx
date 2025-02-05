import React, { useState } from 'react';
import { Link } from "react-router-dom";

const FinalStep = () => {

    return (
        <div className='stepper-content'>
            <div className="stepper-top-img">
                <img src={require(`./images/success_application.webp`)} />
            </div>
            <div className="stepper-application-title">
                Your task is complete! We’ll be in touch with you shortly.
            </div>
            <div className='stepper-btn' style={{ marginTop: "40px" }}>
                <Link to="/" className='primary-btn'>Done</Link>
            </div>
        </div>
    );
}

export default FinalStep;
