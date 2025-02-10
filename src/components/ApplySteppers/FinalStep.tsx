import React, { useState } from 'react';
import { Link } from "react-router-dom";

const FinalStep = () => {

    return (
        <div className='stepper-content'>
            <div className="stepper-top-img">
                <img src={require(`./images/success_application.webp`)} />
            </div>
            <div className="stepper-application-title" style={{ textAlign: "left" }}>
                Thank you! Your application has been submitted successfully
            </div>
            <div className="stepper-application-desc" style={{ fontSize: "20px" }}>
                <p>We've received your application and reviewing it now!</p>
                <br />
                <p>Here's what you can expect next:</p>
                <ol style={{ margin: "10px 0", fontSize:"18px" }}>
                    <li style={{ listStyleType: "inherit" }}>A dedicated finance specialist will contact you shortly to confirm details and discuss your options.</li>
                    <li style={{ listStyleType: "inherit" , marginTop:"5px" }}>We strive to provide you with the best financing options tailored to your needs.</li>
                    <li style={{ listStyleType: "inherit", marginTop: "5px" }}>If you have immediate questions, feel free to reach out to us.</li>
                </ol>
                <p><b>Contact Us: </b>844-405-5363</p>
                <p style={{ marginTop:"5px" }}><b>Email Us: </b>info@autolendingcanada.ca</p>
                <br />
                In the meantime, feel free to explore more about us:
                <ul >
                    <li><a style={{ color:"#e5082b" }} href="https://autolendingcanada.ca/how_works">How it Works?</a></li>
                    <li><a style={{ color: "#e5082b" }} href="https://autolendingcanada.ca/faqs">FAQs</a></li>
                    <li><a style={{ color: "#e5082b" }} href="https://autolendingcanada.ca/customer_stories">Customer Stories</a></li>
                    <li><a style={{ color: "#e5082b" }} href="https://autolendingcanada.ca/about">About</a></li>
                </ul>
            </div>
            <div className='stepper-btn' style={{ marginTop: "40px" }}>
                <Link to="/" className='primary-btn'>Done</Link>
            </div>
        </div>
    );
}

export default FinalStep;
