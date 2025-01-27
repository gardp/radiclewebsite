import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AudioPlayer from './AudioPlayer';
import '../styles/AudioPlayer.css';
import '../styles/MusicContainer.css';

const MusicContainer = ({ children }) => {
  return (
    <Container fluid className="music-container">
      <Row className="g-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AudioPlayer) {
            return (
              <Col className="music-item">
                {child}
              </Col>
            );
          }
          return null;
        })}
      </Row>
    </Container>
  );
};

export default MusicContainer;
