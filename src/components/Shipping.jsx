import React, { useState } from 'react';
import Alert from 'react-bootstrap/esm/Alert';
import Image from 'react-bootstrap/esm/Image';

import img from '../assets/free ship mp1.jpg'

function ShippingAlert () {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert fixed="top" onClose={() => setShow(false)} dismissible className="m-0 p-0 bg-danger text-white text-center">
        <Image src={img} style={{ maxHeight: '50px', marginRight: '5px' }} />
        ATTENTION: Free Shipping Nationwide!
      </Alert>
    );
  }
}

export default ShippingAlert;