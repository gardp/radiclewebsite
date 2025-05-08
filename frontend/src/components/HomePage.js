import React from 'react';
import CustomCarousel from './Carousel';
import MusicContainer from './MusicContainer';
import { tracksData } from './Tracks';
import Media from './Media';
import NewsletterSub from './NewsletterSub';
import PricingTable from './PricingTable';
import CustomNavbar from './CustomNavbar';

const HomePage = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section - Full Viewport Height Carousel */}
      {/* <section className="hero-section">

      </section> */}
      <CustomCarousel />
      {/* Main Content Sections */}
      <div className="main-content">
        <div className="content-section">
          <PricingTable/>
        </div>
        <div className="content-section">
          <MusicContainer tracks={tracksData} trackSize={1.5} controlsSize={0.6} orientation={0} playerTitle="New Features" />
        </div>
        <div className="content-section">
          <Media/>
        </div>
        <div className="content-section">
          <NewsletterSub/>
        </div>
      </div>
    </div>
  );    
};

export default HomePage;
