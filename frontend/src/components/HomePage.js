import React from 'react';
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

const HomePage = () => {
  console.log('TracksData in HomePage:', tracksData); // Debug log
  return (
    <div style={{ marginTop: '56px' }}>
    <CustomCarousel />
    <br></br>
<CustomNavbar/>
    {/* <TabGroup>
  <NewTab content="New Beats" href="#tab1" tabID="tab1">  
  </NewTab>
</TabGroup> */}
<MusicContainer tracks={tracksData} />
<Media/>
<NewsletterSub/>
    </div>
  );
};

export default HomePage;
