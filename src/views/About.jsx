import React from 'react';

import ShippingAlert from '../components/Shipping';
import HeaderNav from '../components/Header';
import AboutSec from '../components/AboutUs';
import ContactForm from '../components/Contact';
import FooterNav from '../components/Footer';

const About = () => {
  return (
    <div>
        <ShippingAlert />
        <HeaderNav />
        <AboutSec />
        <ContactForm />
        <FooterNav />
    </div>
  )
}

export default About