import React from 'react';
import '../styles/AudioPlayer.css';
import '../styles/TrackFrame.css';
import { Nav, Tab } from 'react-bootstrap';
import Track from './Track';

const TrackFrame = ({ tabs = [], currentTrackIndex, onTrackSelect, trackSize }) => (
  <Tab.Container defaultActiveKey={0}>
    <Nav variant="tabs">
      {tabs.map((tab, index) => (
        <Nav.Item key={index}>
          <Nav.Link eventKey={index}>{tab.label}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
    <div className="track-frame">
      <div className="track-list" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <Tab.Content>
          {tabs.map((tab, index) => (
            <Tab.Pane eventKey={index} key={index}>
              {tab.content.map((track, trackIndex) => (
                <Track
                  key={track.id}
                  track={track}
                  isActive={trackIndex === currentTrackIndex}
                  onClick={() => onTrackSelect(trackIndex)}
                  size={trackSize}
                />
              ))}
            </Tab.Pane>
          ))}
        </Tab.Content>
      </div>
    </div>
  </Tab.Container>
);

export default TrackFrame;