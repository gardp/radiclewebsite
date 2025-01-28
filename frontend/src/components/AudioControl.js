import React from "react";

// Import SVGs as URLs from public folder
const playIcon = process.env.PUBLIC_URL + '/assets/images/play.svg';
const pauseIcon = process.env.PUBLIC_URL + '/assets/images/pause.svg';
const nextIcon = process.env.PUBLIC_URL + '/assets/images/next.svg';
const prevIcon = process.env.PUBLIC_URL + '/assets/images/prev.svg';

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
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
);

export default AudioControls;
