import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routes from './routes';

import ShippingAlert from './components/Shipping';
import HeaderNav from './components/Header';
import Prods from './components/Products';
import ContactForm from './components/Contact';
import FooterNav from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;