// import CustomNavbar from './CustomNavbar';
import CustomCarousel from './Carousel';
// import TabGroup from './TabGroup';
// import NewTab from './NewTab';
import MusicContainer from './MusicContainer';
import tracksData from './Tracks';
import Media from './Media';
import NewsletterSub from './NewsletterSub';
// import AboutUs from './AboutUs';
import CustomNavbar from './CustomNavbar';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

const Catalog = () => {
  return (
    <div style={{ marginTop: '56px' }}>
    <br></br>
    <CustomNavbar/>
<MusicContainer tracks={tracksData} trackSize={2} controlsSize={1.4} orientation={1} />
    </div>
  );
};
export default Catalog;
