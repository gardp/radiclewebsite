import React, { useEffect } from "react";
import { FaGitSquare } from "react-icons/fa";

// Import SVGs as URLs from public folder
const playIcon = process.env.PUBLIC_URL + '/assets/images/play.svg';
const pauseIcon = process.env.PUBLIC_URL + '/assets/images/pause.svg';
const nextIcon = process.env.PUBLIC_URL + '/assets/images/next.svg';
const prevIcon = process.env.PUBLIC_URL + '/assets/images/prev.svg';

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
      <div className="track-info">
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title}`}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
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
      <div className="audio-controls">
        <button
          type="button"
          className="prev"
          aria-label="Previous"
          onClick={onPrevClick}
        >
          <img src={prevIcon} alt="Previous" />
        </button>
        {isPlaying ? (
          <button
            type="button"
            className="pause"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
          >
            <img src={pauseIcon} alt="Pause" />
          </button>
        ) : (
          <button
            type="button"
            className="play"
            onClick={() => onPlayPauseClick(true)}
            aria-label="Play"
          >
            <img src={playIcon} alt="Play" />
          </button>
        )}
        <button
          type="button"
          className="next"
          aria-label="Next"
          onClick={onNextClick}
        >
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default AudioControls;
