import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import CustomerReview from './CustomerReview/index.tsx';

function CustomerStories() {
    return (
        <div className='customer-stories-page'>
            <InternalHeader />
            <CustomerReview />
        </div>
    );
}

export default CustomerStories;
