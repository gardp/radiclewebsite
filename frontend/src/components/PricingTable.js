import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PricingTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { closePricingModal } from '../features/priceLicensing/priceLicensing.js';

// const PricingTable = ({ isOpen, onClose, track }) => {
const PricingTable = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, currentTrack: track } = useSelector((state) => state.priceLicensing); //destructuring the state

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        dispatch(closePricingModal());
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Handle outside click to close modal
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('pricing-modal-backdrop')) {
      dispatch(closePricingModal());
    }
  };
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  
  const handleContactClick = () => {
    dispatch(closePricingModal());
    navigate('/contact');
  };
  
  const handleAddToCart = () => {
    if (selectedOption) {
      console.log(`Added ${track.title} with license option: ${selectedOption} to cart`);
      // Implement cart functionality here
      dispatch(closePricingModal());
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="pricing-modal-backdrop" onClick={handleBackdropClick}>
      <div className="pricing-modal-content">
        <button className="close-button" onClick={() => dispatch(closePricingModal())}>×</button>
        
        <div className="pricing-header">
          <h2>License Options for "{track ? track.title : 'Track'}"</h2>
          <p>Select the license that best fits your needs</p>
        </div>
        
        <div className="pricing-options-container">
          {/* Option 1 */}
          <div 
            className={`pricing-option ${selectedOption === 'basic' ? 'selected' : ''}`} 
            onClick={() => handleOptionSelect('basic')}
          >
            <div className="pricing-option-header">
              <h3>Basic</h3>
              <div className="price">$80</div>
            </div>
            <div className="license-type">mp3 and wav (Non-exclusive)</div>
            <ul className="usage-terms">
              <li>Used for Music Recording</li>
              <li>Distribute up to UNLIMITED copies</li>
              <li>UNLIMITED Distribution and Streams</li>
              <li>For Profit Live Performances</li>
            </ul>
          </div>
          
          {/* Option 2 */}
          <div 
            className={`pricing-option ${selectedOption === 'standard' ? 'selected' : ''}`} 
            onClick={() => handleOptionSelect('standard')}
          >
            <div className="pricing-option-header">
              <h3>Standard</h3>
              <div className="price">$180</div>
            </div>
            <div className="license-type">mp3 + wave + stems (Non-Exclusive)</div>
            <ul className="usage-terms">
              <li>Distribute up to UNLIMITED copies</li>
              <li>UNLIMITED Distribution and Streams</li>
              <li>For Profit Live Performances</li>
            </ul>
          </div>
          
          {/* Option 3 */}
          <div 
            className={`pricing-option ${selectedOption === 'premium' ? 'selected' : ''}`} 
            onClick={() => handleOptionSelect('premium')}
          >
            <div className="pricing-option-header">
              <h3>Premium</h3>
              <div className="price">$250</div>
            </div>
            <div className="license-type">mp3 + wave + stems</div>
            <ul className="usage-terms">
              <li>UNLIMITED Distribution and Streams</li>
              <li>For Profit Live Performances (Unlimited)</li>
            </ul>
          </div>
          
          {/* Option 4 */}
          <div 
            className={`pricing-option ${selectedOption === 'exclusive' ? 'selected' : ''}`} 
            onClick={() => handleOptionSelect('exclusive')}
          >
            <div className="pricing-option-header">
              <h3>Exclusive</h3>
              <div className="price">Negotiable</div>
            </div>
            <div className="license-type">Exclusive Rights</div>
            <ul className="usage-terms">
              <li>UNLIMITED Distribution and Streams</li>
              <li>For Profit Live Performances (Unlimited)</li>
            </ul>
            <button 
              className="contact-button" 
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="pricing-footer">
          <button 
            className={`add-to-cart-button ${selectedOption ? 'active' : 'disabled'}`}
            onClick={handleAddToCart}
            disabled={!selectedOption || selectedOption === 'exclusive'}
          >
            {selectedOption === 'exclusive' ? 'Contact Us for Pricing' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;