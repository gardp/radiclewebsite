import React from 'react';
import CustomCarousel from './Carousel';
import FeaturedHighlight from './FeaturedHighlight';
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
      {/* Visual transition component */}
      <FeaturedHighlight />
      {/* Main Content Sections */}
      <div className="main-content">
        {/* <div className="content-section">
          <PricingTable/>
        </div> */}
        <div className="content-section">
          <MusicContainer 
            tracks={tracksData} 
            playerTitle="New Features" 
            scale={1} /* Scale from 0.5 to 1, where 1 is 100% (default) */
          />
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
