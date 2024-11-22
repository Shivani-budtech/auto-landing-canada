import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function PowerSport() {
    return (
        <section className='power-sport-sec contact-us-sec container'>
            <div className='power-sport-row'>
                <div className='power-sport-img'>
                    <img src={require("../../images/power_sport_1.png")} />
                </div>
                <div className='power-sport-content'>
                    <div className='power-sports-counter'>
                        <span>
                            01
                        </span>/03
                    </div>
                    <div className='power-sport-vector'>
                        <img src={require("../../images/power_sport_1_vec.png")} />
                    </div>
                    <div className='power-sport-title'>
                        Recreational<br/>Adventures
                    </div>
                    <div className='power-sport-detail'>
                        <p>
                            Experience relaxation at its best with our recreational financing options. Whether you’re looking to hit the open road in a stylish camper, explore scenic parks in a comfortable RV, or tow your own trailer for a unique adventure, we’ve got you covered.
                        </p>
                        <p>
                            Our flexible financing plans make it easy to turn your leisure dreams into reality, with competitive rates and convenient terms. Say goodbye to stress and hello to unforgettable experiences as you embark on your next journey. Don’t let financial worries hold you back from enjoying life’s simple pleasures – trust us to make your leisure time truly exceptional.
                        </p>
                    </div>
                    <div className='power-sport-apply'>
                        <Link to={"/apply"} className="primary-btn">Apply Now</Link>
                    </div>
                </div>
            </div>
            <div className='power-sport-row'>
                <div className='power-sport-content'>
                    <div className='power-sports-counter'>
                        <span>
                            02
                        </span>/03
                    </div>
                    <div className='power-sport-vector'>
                        <img src={require("../../images/power_sport_2_vec.png")} />
                    </div>
                    <div className='power-sport-title'>
                        Marine<br/>Expeditions
                    </div>
                    <div className='power-sport-detail'>
                        <p>
                            Set sail with confidence through our comprehensive Marine financing options at Allstar Auto Finance. Whether you’re in the market for an affordable boat, a sleek sailboat, a thrilling Sea-Doo, or even a luxurious yacht, we’re here to ensure your aquatic dreams become a reality.
                        </p>
                        <p>
                            Our financing solutions are designed to make your maritime journey effortless and accessible. With competitive rates and flexible terms, we cater to all your watercraft needs, no matter the size or style. Don’t miss out on the joys of exploring the open waters – trust Allstar Auto Finance to help you embark on unforgettable aquatic adventures today.
                        </p>
                    </div>
                    <div className='power-sport-apply'>
                        <Link to={"/apply"} className="primary-btn">Apply Now</Link>
                    </div>
                </div>
                <div className='power-sport-img'>
                    <img src={require("../../images/power_sport_2.png")} />
                </div>
            </div>
            <div className='power-sport-row'>
                <div className='power-sport-img'>
                    <img src={require("../../images/power_sport_3.png")} />
                </div>
                <div className='power-sport-content'>
                    <div className='power-sports-counter'>
                        <span>
                            03
                        </span>/03
                    </div>
                    <div className='power-sport-vector'>
                        <img src={require("../../images/power_sport_3_vec.png")} />
                    </div>
                    <div className='power-sport-title'>
                        Leisurely<br/>Expeditions
                    </div>
                    <div className='power-sport-detail'>
                        <p>
                            Ignite your passion for adventure with our leisure financing options at Auto Lending Canada. Whether you’re eager to rev up on dirt bikes, hit the open road on motorcycles, embrace eco-friendly travel with e-bikes, conquer rugged terrain with ATVs and UTVs, or blaze through the snow on snowmobiles, we’re here to fuel your thrill-seeking desires.
                        </p>
                        <p>
                            Our financing plans are tailored to empower your adrenaline-fueled escapades, offering competitive rates and flexible terms to accommodate your needs. Don’t let financial constraints hold you back from the exhilarating world of leisure vehicles – trust Auto Lending Canada to be your partner in adventure, making your recreational dreams a reality.
                        </p>
                    </div>
                    <div className='power-sport-apply'>
                        <Link to={"/apply"} className="primary-btn">Apply Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PowerSport;
