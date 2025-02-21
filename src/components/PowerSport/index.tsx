import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function PowerSport() {
    return (
        <section className='power-sport-sec contact-us-sec container'>
            <div className='power-sport-row'>
                <div className='power-sport-img'>
                    <img src={`/images/power_sport_1.webp`} />
                </div>
                <div className='power-sport-content'>
                    <div className='power-sports-counter'>
                        <span>
                            01
                        </span>/03
                    </div>
                    <div className='power-sport-vector'>
                        <img src={`/images/power_sport_1_vec.webp`} />
                    </div>
                    <div className='power-sport-title'>
                        Recreational<br/>Adventures
                    </div>
                    <div className='power-sport-detail'>
                        <p>
                            Discover Canada’s breathtaking landscapes with Auto Lending Canada's recreational financing solutions. Whether it’s an RV for road trips, a camper for serene escapes, or a trailer to carry your gear, we make adventure affordable. 
                        </p>
                        <p>
                            With competitive rates and flexible terms, you’re one step closer to the outdoor experience you’ve always dreamed of. Start your journey today and explore Canada like never before!
                        </p>
                    </div>
                    <div className='power-sport-apply'>
                        <Link to={"/contact_us"} className="primary-btn">Contact Us</Link>
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
                        <img src={`/images/power_sport_2_vec.webp`} />
                    </div>
                    <div className='power-sport-title'>
                        Marine<br/>Expeditions
                    </div>
                    <div className='power-sport-detail'>
                        <p>
                            Canada’s waterways are waiting—don’t let financial constraints hold you back. Whether you're exploring crystal-clear lakes or venturing into coastal waters, our recreational marine loans make it possible. 
                        </p>
                        <p>
                            Get started today and turn your marine expedition dreams into reality with Auto Lending Canada, your trusted partner for life on the water.
                        </p>
                    </div>
                    <div className='power-sport-apply'>
                        <Link to={"/contact_us"} className="primary-btn">Contact Us</Link>
                    </div>
                </div>
                <div className='power-sport-img'>
                    <img src={`/images/power_sport_2.webp`} />
                </div>
            </div>
            <div className='power-sport-row'>
                <div className='power-sport-img'>
                    <img src={`/images/power_sport_3.webp`} />
                </div>
                <div className='power-sport-content'>
                    <div className='power-sports-counter'>
                        <span>
                            03
                        </span>/03
                    </div>
                    <div className='power-sport-vector'>
                        <img src={`/images/power_sport_3_vec.webp`} />
                    </div>
                    <div className='power-sport-title'>
                        Leisurely<br/>Expeditions
                    </div>
                    <div className='power-sport-detail'>
                        <p>
                            Life’s most memorable moments are waiting to be explored—don’t let financial concerns hold you back. With Auto Lending Canada, you’ll have the freedom to enjoy Canada’s natural beauty on your terms. 
                        </p>
                        <p>
                            Start your journey today with a trusted partner in recreational financing and experience leisure like never before.
                        </p>
                    </div>
                    <div className='power-sport-apply'>
                        <Link to={"/contact_us"} className="primary-btn">Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PowerSport;
