import React, { useEffect } from 'react';
import '../styles/AudioPlayer.css';
import '../styles/Track.css';

const Track = ({ track, isActive, onClick, size }) => {
  // Function to handle track image click
  const handleTrackImageClick = (e) => {
    // Only trigger onClick if clicking directly on the track image
    if (e.target.className === 'track-thumb') {
      onClick();
    }
  };

  // Set the CSS variable for track size when the component mounts or size changes
  useEffect(() => {
    document.documentElement.style.setProperty('--track-base-size', size);
  }, [size]);

  return (
    <div 
      className={`track-item ${isActive ? 'active' : ''}`}
      style={{ display: isActive ? 'none' : 'inline-block' }}
    >
      <div className="track-thumb-container">
        <img
          className="track-thumb"
          src={track.image}
          alt={`track artwork for ${track.title}`}
          // onClick={handleTrackImageClick}
          onClick={onClick}
        />
        {track.links?.streamLink && (
          <a href={track.links.streamLink} target="_blank" rel="noopener noreferrer">
            <img
              className="track-icon stream-icon"
              src={`${process.env.PUBLIC_URL}/images/icons8-music-100.png`}
              alt="Stream"
            />
            <span className="tooltip">Stream</span>
          </a>
        )}
        {track.links?.buyLink && (
          <a href={track.links.buyLink} target="_blank" rel="noopener noreferrer">
            <img
              className="track-icon buy-icon"
              src={`${process.env.PUBLIC_URL}/images/icons8-cart-100.png`}
              alt="Buy"
            />
            <span className="tooltip">Buy</span>
          </a>
        )}
        {track.links?.downloadLink && (
          <a href={track.links.downloadLink} target="_blank" rel="noopener noreferrer">
            <img
              className="track-icon download-icon"
              src={`${process.env.PUBLIC_URL}/images/icons8-listening-to-music-on-headphones-100.png`}
              alt="Download"
            />
            <span className="tooltip">Download</span>
          </a>
        )}
      </div>
      <h4 className="track-title">{track.title}</h4>
      <p className="track-artist">{track.artist}</p>
    </div>
  );
};

export default Track;