import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import ContactUsForm from './ContactUsForm/index.tsx';

function About() {
    return (
        <section className='contact-page'>
            <InternalHeader />
            <ContactUsForm />
        </section>
    );
}

export default About;
