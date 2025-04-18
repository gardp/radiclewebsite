import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Catalog from './components/Catalog';
import PricingTable from './components/PricingTable';
import { CartProvider } from './context/cart/CartProvider';

function App() {
  return (
<>
    <CartProvider>
      <Router>
        <div className="app-container">
        <CustomNavbar />
          <main className="main-content">
            <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/pricing" element={<PricingTable />} />
              {/* ADD this <Route path="*" element={<NotFound />} /> */}
              {/* Always start with the most specific routes first then move to the more general ones... */}
              {/* Add more routes as needed */}
            </Routes>

          </main>
          {/* <PricingTable/> */}
        </div>
      </Router>
    </CartProvider>
    </>
  );
}

export default App;