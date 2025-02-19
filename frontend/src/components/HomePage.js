import React from 'react';
// import CustomNavbar from './CustomNavbar';
import CustomCarousel from './Carousel';
import TabGroup from './TabGroup';
import NewTab from './NewTab';
import MusicContainer from './MusicContainer';
import tracksData from './Tracks';
import Media from './Media';
import NewsletterSub from './NewsletterSub';
import AboutUs from './AboutUs';

const HomePage = () => {
  return (
    <div style={{ marginTop: '56px' }}>
    <CustomCarousel />
    <br></br>
    <TabGroup>
  <NewTab content="New Beats" href="#tab1" tabID="tab1">
         
  </NewTab>
  {/* <NewTab content="New Releases& Features" href="#tab2" tabID="tab2">
    <div><MusicContainer tracks={tracks} /></div>
  </NewTab> */}
</TabGroup>
<MusicContainer tracks={tracksData} />
    <Media />
    <NewsletterSub />
    </div>
  );
};

export default HomePage;
