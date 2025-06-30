import React, { useEffect } from "react";
import { FaGitSquare } from "react-icons/fa";
import '../styles/SkeuomorphicButtons.css';
import '../styles/AudioControlButtons.css';
import '../styles/AudioControls.css';

// Import images from public folder
const playIcon = process.env.PUBLIC_URL + '/assets/images/icons8-play-button.png';
const pauseIcon = process.env.PUBLIC_URL + '/assets/images/icons8-pause-button.png';
const nextIcon = process.env.PUBLIC_URL + '/assets/images/icons8-next.png';
const prevIcon = process.env.PUBLIC_URL + '/assets/images/icons8-prev.png';
const playIconBlack = process.env.PUBLIC_URL + '/assets/images/icons8-play-black.png';
const pauseIconBlack = process.env.PUBLIC_URL + '/assets/images/icons8-pause-button-black.png';
const nextIconYellow = process.env.PUBLIC_URL + '/assets/images/icons8-next-yellow.png';
const playIconYellow = process.env.PUBLIC_URL + '/assets/images/icons8-play-yellow.png';
const pauseIconYellow = process.env.PUBLIC_URL + '/assets/images/icons8-pause-yellow.png';
const prevIconYellow = process.env.PUBLIC_URL + '/assets/images/icons8-prev-yellow.png';

// New icons for streaming and buying
const streamIcon = process.env.PUBLIC_URL + '/assets/images/icons8-music-stream-black.png';
const buyIcon = process.env.PUBLIC_URL + '/assets/images/icons8-cart-black.png';

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  // Track info props
  image,
  title,
  artist,
  audioSrc,
  color,
  // Audio control props
  trackProgress,
  audioRef,
  onScrub,
  onScrubEnd,
  trackStyling,
}) => {
  // Size customization functionality has been removed

  // Using a ref to track media query for desktop view
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    // Check if we're on desktop
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);

    // Update state when viewport size changes
    const handleResize = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div className="controls-container">
      {/* Vinyl artwork for desktop - direct child of controls-container */}
      {isDesktop && (
        <div className={`vinyl-artwork-container ${isPlaying ? 'is-playing' : ''}`}>
          <img
            className="vinyl-artwork"
            src={image}
            alt={`track artwork for ${title}`}
          />
        </div>
      )}
      <h1 className="now-playing-title">Now Playing</h1>
      {/* New div for stream and buy icons */}
      <div className="audio-actions-bar">
        <div className="stream-icon-container">
          <img src={streamIcon} alt="Stream Track" className="action-icon" />
        </div>
        <div className="buy-icon-container">
          <img src={buyIcon} alt="Buy Track" className="action-icon" />
        </div>
      </div>
      <div className="now-playing-container">
        {/* Vinyl artwork for mobile - inside now-playing-container */}
        {!isDesktop && (
          <div className={`vinyl-artwork-container ${isPlaying ? 'is-playing' : ''}`}>
            <img
              className="vinyl-artwork"
              src={image}
              alt={`track artwork for ${title}`}
            />
          </div>
        )}
        
        <div className="track-info-frame">
          <div className="track-info">
            <h2 className="title">{title}</h2>
            <h3 className="artist">{artist}</h3>
          </div>
        </div>
        
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={audioRef.current.duration ? audioRef.current.duration : `${audioRef.current.duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        
        <div className="controls-frame">
          <div className="audio-controls">
            <button
              type="button"
              className="prev size-sm"
              aria-label="Previous"
              onClick={onPrevClick}
            >
              <img 
                src={isDesktop ? prevIconYellow : prevIcon} 
                alt="Previous Track" 
                className="control-button-img" 
              />
            </button>
            {isPlaying ? (
              <button
                type="button"
                className="pause size-md"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
              >
                <img 
                  src={isDesktop ? pauseIconYellow: pauseIcon} 
                  alt="Pause" 
                  className="control-button-img" 
                />
              </button>
            ) : (
              <button
                type="button"
                className="play size-md"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
              >
                <img 
                  src={isDesktop ? playIconYellow : playIcon} 
                  alt="Play" 
                  className="control-button-img" 
                />
              </button>
            )}
            <button
              type="button"
              className="next size-sm"
              aria-label="Next"
              onClick={onNextClick}
            >
              <img 
                src={isDesktop ? nextIconYellow : nextIcon} 
                alt="Next Track" 
                className="control-button-img" 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioControls;
