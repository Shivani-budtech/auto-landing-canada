import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import Faq from './FaqTabs/index.tsx';

function Faqs() {
    return (
        <section className='faq-page'>
            <InternalHeader />
            <Faq />
        </section>
    );
}

export default Faqs;
