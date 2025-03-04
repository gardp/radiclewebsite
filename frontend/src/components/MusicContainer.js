
import { Container, Row, Col } from 'react-bootstrap';
import AudioPlayer from './AudioPlayer';
import '../styles/AudioPlayer.css';
import '../styles/MusicContainer.css';
import React from 'react';

const MusicContainer = ({ tracks }) => {
  console.log("MusicContainer received tracks:", tracks); // Debug log
  // const [activePlayer, setActivePlayer] = useState(null);

  // const handlePlay = (index) => {
  //   setActivePlayer(index);
  // };

  return (
    <Container fluid className="music-container">
      <Row className="g-4">
          <Col className="music-item">
            <AudioPlayer 
              tracks={tracks} 
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
