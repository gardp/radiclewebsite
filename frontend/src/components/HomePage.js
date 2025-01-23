import React from 'react';
import CustomNavbar from './CustomNavbar';
import CustomCarousel from './Carousel';
import TabGroup from './TabGroup';
import NewTab from './NewTab';
import MusicContainer from './MusicContainer';
import AudioPlayerWrapper from './AudioPlayerWrapper';

const HomePage = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <br />
      <TabGroup>
        <NewTab>
          <MusicContainer>
            <AudioPlayerWrapper
              name="Big (feat. Gunna)"
              description="First Track"
              audioSrc="/assets/music/01 Big (feat. Gunna).m4a"
              imageSrc="/assets/images/radicleavatar.jpg"
            />
          </MusicContainer>
        </NewTab>
      </TabGroup>
    </div>
  );
};

export default HomePage;
