import React from 'react';
// import CustomNavbar from './CustomNavbar';
import CustomCarousel from './Carousel';
// import TabGroup from './TabGroup';
// import NewTab from './NewTab';
import MusicContainer from './MusicContainer';
import { tracksData } from './Tracks';
import Media from './Media';
import NewsletterSub from './NewsletterSub';
// import AboutUs from './AboutUs';
import CustomNavbar from './CustomNavbar';
import PricingTable from './PricingTable';

const HomePage = () => {
  return (
    <div className="page-wrapper">
    <div style={{ marginTop: '30px' }}>
    <div className="content-section">
    <CustomCarousel />
    </div>
    <div className="content-section">
    <PricingTable/>
    </div>
    <div className="content-section">
<MusicContainer tracks={tracksData} trackSize={1.5} controlsSize={1} orientation={0} />
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
