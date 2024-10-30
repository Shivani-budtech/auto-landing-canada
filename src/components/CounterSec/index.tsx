import React from 'react';
import './index.css';
import '../../responsive.css';
function CounterSec() {

    return (
        <section className="counter-sec">
            <div className='counter-row'>
                <div className='counter'>
                    <h1>
                        +50 k
                    </h1>
                    <p>
                        Cars Sold
                    </p>
                </div>
                <div className='counter'>
                    <h1>
                        97%
                    </h1>
                    <p>
                        First Call Resolution Rate
                    </p>
                </div>
                <div className='counter'>
                    <h1>
                        100%
                    </h1>
                    <p>
                        Satisfied Customer
                    </p>
                </div>
                <div className='counter'>
                    <h1>
                        +100
                    </h1>
                    <p>
                        Experts involved
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CounterSec;
