import React from 'react';
import '../styles/AudioPlayer.css';

const TrackFrame = ({ tracks, currentTrackIndex, onTrackSelect }) => (
  <div className="track-frame">
    {/* Current Track Artwork */}
    <div className="current-track">
      <img
        className="artwork"
        src={tracks[currentTrackIndex]?.image}
        alt={`track artwork for ${tracks[currentTrackIndex]?.title}`}
      />
      <h2 className="title">{tracks[currentTrackIndex]?.title}</h2>
      <h3 className="artist">{tracks[currentTrackIndex]?.artist}</h3>
    </div>

    {/* Horizontal Track List */}
    <div className="track-list">
      {tracks.map((track, index) => (
        <div 
          key={index}
          className={`track-item ${index === currentTrackIndex ? 'active' : ''}`}
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