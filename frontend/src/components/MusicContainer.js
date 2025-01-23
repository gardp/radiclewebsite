import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AudioPlayerWrapper from './AudioPlayerWrapper';
import '../styles/AudioPlayerWrapper.css';

const MusicContainer = ({ children }) => {
  return (
    <Container fluid className="music-container">
      <div className="music-container">TESTESGJHGFJDGFJDGHFJHGDF</div>
      <Row className="g-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AudioPlayerWrapper) {
            return (
              <Col lg={4} md={6} sm={12} className="music-item">
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
