import React from 'react';
import '../styles/AudioPlayer.css';
import '../styles/Track.css';

const Track = ({ track, isActive, onClick }) => {
  return (
    <div 
      className={`track-item ${isActive ? 'active' : ''}`}
      style={{ display: isActive ? 'none' : 'inline-block' }}
      onClick={onClick}
    >
      <div className="track-thumb-container">
        <img
          className="track-thumb"
          src={track.image}
          alt={`track artwork for ${track.title}`}
        />
        {track.links?.streamLink && (
          <img
            className="track-icon stream-icon"
            src={`${process.env.PUBLIC_URL}/images/icons8-music-100.png`}
            alt="Stream"
          />
        )}
        {track.links?.buyLink && (
          <img
            className="track-icon buy-icon"
            src={`${process.env.PUBLIC_URL}/images/icons8-cart-100.png`}
            alt="Buy"
          />
        )}
        {track.links?.downloadLink && (
          <img
            className="track-icon download-icon"
            src={`${process.env.PUBLIC_URL}/images/icons8-listening-to-music-on-headphones-100.png`}
            alt="Download"
          />
        )}
      </div>
      <h4 className="track-title">{track.title}</h4>
      <p className="track-artist">{track.artist}</p>
    </div>
  );
};

export default Track;