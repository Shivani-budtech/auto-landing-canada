import React from 'react';
import './index.css';
import '../../responsive.css';
function CounterSec() {

    return (
        <section className="counter-sec container">
            <div className='counter-row'>
                <div className='counter'>
                    <h1>
                        5-Minute <br/>Pre-Approval
                    </h1>
                    <p>
                        Quick and easy 5-minute pre-approval to get you started.
                    </p>
                </div>
                <div className='counter'>
                    <h1>
                        10,000+ Cars<br/>Financed
                    </h1>
                    <p>
                        Proudly financed over 10,000 vehicles for our customers.
                    </p>
                </div>
                <div className='counter'>
                    <h1>
                        30+ Lender<br/>Partnerships
                    </h1>
                    <p>
                        Partnered with 30+ leading lenders to provide the best financing options.
                    </p>
                </div>
                <div className='counter'>
                    <h1>
                        100% Customer Satisfaction
                    </h1>
                    <p>
                        We've achieved a 100% customer satisfaction rating, ensuring every client drives away happy.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CounterSec;
