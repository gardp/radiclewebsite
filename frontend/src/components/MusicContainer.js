import { Container, Row, Col } from 'react-bootstrap';
import AudioPlayer from './AudioPlayer';
import '../styles/AudioPlayer.css';
import '../styles/MusicContainer.css';
import React from 'react';

const MusicContainer = ({ tracks, trackSize, controlsSize, orientation, playerTitle }) => {
  // trackSize is for the track title and artist in the TrackFrame
  // controlsSize the control of the currently playing tracks in the AudioControls component
  console.log("MusicContainer received tracks:", tracks); // Debug log
  // const [activePlayer, setActivePlayer] = useState(null);

  // const handlePlay = (index) => {
  //   setActivePlayer(index);
  // };

  return (
    <Container fluid className="music-container">
      <Row className="g-0 w-100"> 
        <Col xs={12} className="music-item p-0 w-100"> 
          <AudioPlayer 
            tracks={tracks} 
            trackSize={trackSize}
            controlsSize={controlsSize}
            orientation={orientation}
            playerTitle={playerTitle}
            // isActive={activePlayer === index} // Boolean true or false to determine if the player is active
            // onPlay={() => handlePlay(index)}
            // onPause={() => setActivePlayer(null)}
          />
          {/* {console.log("The music container track is:", tracks)} */}
        </Col>
      </Row>
    </Container>
  );
};

export default MusicContainer;
