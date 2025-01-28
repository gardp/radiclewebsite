import React from 'react';
import CustomNavbar from './CustomNavbar';
import CustomCarousel from './Carousel';
import TabGroup from './TabGroup';
import NewTab from './NewTab';
import MusicContainer from './MusicContainer';
import AudioPlayer from './AudioPlayer';
import tracks from './Tracks';

const HomePage = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <br />
      <TabGroup>
        <NewTab>
        </NewTab>
      </TabGroup>
      <MusicContainer>
        <AudioPlayer tracks={tracks} />
      </MusicContainer>
    </div>
  );
};

export default HomePage;
