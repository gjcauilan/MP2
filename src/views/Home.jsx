import React from 'react';

import ShippingAlert from '../components/Shipping';
import HeaderNav from '../components/Header';
import Prods from '../components/Products';
import ContactForm from '../components/Contact';
import FooterNav from '../components/Footer';

const Home = () => {
  return (
    <div>
        <ShippingAlert />
        <HeaderNav />
        <Prods />
        <ContactForm />
        <FooterNav />
    </div>
  )
}

export default Home