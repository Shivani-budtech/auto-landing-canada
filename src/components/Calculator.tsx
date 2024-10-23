import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import CalculatorBudget from './CalculatorBudget/index.tsx';

function Calculator() {
    return (
        <div className='about-page'>
            <InternalHeader />
            <CalculatorBudget />
        </div>
    );
}

export default Calculator;
