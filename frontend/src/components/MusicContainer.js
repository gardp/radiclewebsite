import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewMusic from './AudioPlayerWrapper';
import '../styles/NewMusic.css';

const MusicContainer = ({ children }) => {
  return (
    <Container fluid className="music-container">
      <Row className="g-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === NewMusic) {
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
