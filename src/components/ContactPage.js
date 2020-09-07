import React from 'react';
import ContactTab from './ContactTab';
import Contact from './Contact';

const ContactPage = () => {
    if (window.outerWidth <= 800) {
        return <ContactTab />
    } else {
        return <Contact />
    }
}

export default ContactPage;