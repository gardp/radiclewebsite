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

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  controlsSize = 1, // Default to 1 if not provided
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
  // Set the CSS variable for controls size when the component mounts or size changes
  useEffect(() => {
    document.documentElement.style.setProperty('--controls-base-size', controlsSize);
  }, [controlsSize]);

  return (
    <div className="controls-container" style={{ transform: `scale(${controlsSize})` }}>
      <div className="now-playing-container">
        <h1 className="now-playing-title">Now Playing</h1>
        
        <div className={`vinyl-artwork-container ${isPlaying ? 'is-playing' : ''}`}>
          <img
            className="vinyl-artwork"
            src={image}
            alt={`track artwork for ${title}`}
          />
        </div>
        
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
              <img src={prevIcon} alt="Previous Track" className="control-button-img" />
            </button>
            {isPlaying ? (
              <button
                type="button"
                className="pause size-md"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
              >
                <img src={pauseIcon} alt="Pause" className="control-button-img" />
              </button>
            ) : (
              <button
                type="button"
                className="play size-md"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
              >
                <img src={playIcon} alt="Play" className="control-button-img" />
              </button>
            )}
            <button
              type="button"
              className="next size-sm"
              aria-label="Next"
              onClick={onNextClick}
            >
              <img src={nextIcon} alt="Next Track" className="control-button-img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioControls;
