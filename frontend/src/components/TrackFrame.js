import React from 'react';
import '../styles/AudioPlayer.css';
import '../styles/TrackFrame.css';

const TrackFrame = ({ tracks, currentTrackIndex, onTrackSelect }) => (
  
  <div className="track-frame">
    {/* Horizontal Track List */}
    <div className="track-list" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
      {tracks.map((track, index) => (
        <div 
          key={index}
          className={`track-item ${index === currentTrackIndex ? 'active' : ''}`}
          style={{ display: index === currentTrackIndex ? 'none' : 'inline-block' }}
          onClick={() => onTrackSelect(index)}
        >
          <img
            className="track-thumb"
            src={track.image}
            alt={`track artwork for ${track.title}`}
          />
          <h4 className="track-title">{track.title}</h4>
          <p className="track-artist">{track.artist}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TrackFrame;