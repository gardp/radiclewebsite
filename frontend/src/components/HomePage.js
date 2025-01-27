import React from 'react';
import CustomNavbar from './CustomNavbar';
import CustomCarousel from './Carousel';
import TabGroup from './TabGroup';
import NewTab from './NewTab';
import MusicContainer from './MusicContainer';
import AudioPlayer from './AudioPlayer';

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
            <AudioPlayer
              name="Big (feat. Gunna)"
              description="First Track"
              audioSrc="/assets/music/01 Big (feat. Gunna).mp3"
              imageSrc="/assets/images/radicleavatar.jpg"
            />
          </MusicContainer>
    </div>
  );
};

export default HomePage;
