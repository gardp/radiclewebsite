import CustomNavbar from './CustomNavbar';
import React from 'react';
import CustomCarousel from './Carousel';
import TabGroup from './TabGroup';
import NewTab from './NewTab';
import MusicContainer from './MusicContainer';
import NewMusic from './AudioPlayerWrapper';

const HomePage = () => {
  return (
    <div>
      {/* <h1>Welcome to my homepage</h1> */}
      <CustomNavbar />
      <CustomCarousel />
      <br />
      <TabGroup>
        <NewTab content="Music" href="#music" tabID="music-tab">
          <MusicContainer>
            <NewMusic 
              name="Big (feat. Gunna)"
              description="First Track"
              imageSrc="/assets/images/radicleavatar.jpg"
              audioSrc="/assets/music/01%20Big%20(feat.%20Gunna).m4a"
            />
          </MusicContainer>
        </NewTab>
      </TabGroup>
    </div>
  );
};

export default HomePage;
