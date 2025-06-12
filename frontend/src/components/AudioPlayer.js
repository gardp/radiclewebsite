import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControl";
import TrackFrame from "./TrackFrame";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import "../styles/AudioPlayer.css";


const AudioPlayer = ({ tracks, playerTitle}) => {
  console.log("AudioPlayer received tracks:", tracks); // Debug log
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // console.log("Initial render - isPlaying:", isPlaying, "isActive:", isActive);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filter tracks based on search term
  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Use filteredTracks for display, but manage currentTrackIndex based on the original tracks array
  // This assumes currentTrackIndex refers to the index in the *original* `tracks` prop.
  // If a track is filtered out, the player might behave unexpectedly if it was the current track.
  // A more robust solution would involve updating currentTrackIndex when tracks are filtered,
  // or ensuring the currently playing track is always part of filteredTracks.
  const currentTrack = tracks[currentTrackIndex]; 
  // console.log("The current track is:", tracks);
  const { title, artist, audioSrc, image, color } = currentTrack || {}; // Add guard for undefined currentTrack


  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const currentPercentage = audioRef.current.duration
    ? `${(trackProgress / audioRef.current.duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handlePause();
        // clearInterval(intervalRef.current);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      handlePlay();
    }
    startTimer();
  };

  const handlePlay = () => {
    setIsPlaying(true); //triggers side effect in AudioPlayer and affect AudioControls responsibly
    // onPlay(); //sets activePlayer to true in MusicContainer because of HandlePlay in MusicContainer
  };

  const handlePause = () => {
    setIsPlaying(false);
    // onPause();
  };

  const toPrevTrack = () => {
    if (currentTrackIndex - 1 < 0) {
      setCurrentTrackIndex(tracks.length - 1);
    } else {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  // Effect for handling play/pause
  useEffect(() => {
    // Ensure player is paused when not active
    //add to the trackframe parameters and check here isActive = {CurrentTrackIndex === index}
    //OR map through tracks and check if index === currentTrackIndex. And instead of isActive, use currentTrackIndex in the dependency array
    // tracks.map((track, index) => 
      if (!audioRef.current.paused){
          setIsPlaying(false);
          audioRef.current.pause();
      }
    },[currentTrackIndex]);

  // Ahh got it- when HandlePlay sets isPlaying to true,
  //HandlePlay is receives onPlay which is a parameter that receives
  //handlyPlay from the MusicContainer, which sets the activePlayer
  // to true. And that same isPlaying that was set to true trigger the following
  // side effect that plays the audio.
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  // Audio change
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      console.log("2-isReady.current", isReady.current);
      audioRef.current.play();
      handlePlay();
      startTimer();
      // if it's already the current track being reloaded, then play it again. Otherwise, set it to true to play it
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    } 
  }, [audioSrc]);

  // player change
  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      audioRef.current.src = '';
    //   audioRef.current = null;
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Potentially reset currentTrackIndex or adjust playback if the current track is filtered out
    // For now, we'll just filter the list displayed in TrackFrame
  };

  return (
    <div className="audio-player">
      {/* {playerTitle && <h2 className="player-title">{playerTitle}</h2>} */}
      <div className="player-grid">
        <div className="track-frame-container">
          <SearchBar onSearch={handleSearch} /> {/* Add SearchBar here */}
          <TrackFrame 
            tabs={
              [
                {
                  label: "Tab 1",
                  content: filteredTracks, // Use filteredTracks for the content
                },
                {
                  label: "Tab 2",
                  content: filteredTracks, // Use filteredTracks for the content
                },
              ]
    }
          //put isActive here instead of the MusicContainer
          //add to the trackframe parameters and check here isActive = {CurrentTrackIndex === index}
            currentTrackIndex={currentTrackIndex} // This index still refers to the original `tracks` array
            onTrackSelect={setCurrentTrackIndex}
          />
        </div>
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={isPlaying ? handlePause : handlePlay}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          trackProgress={trackProgress}
          onScrub={onScrub}
          onScrubEnd={onScrubEnd}
          trackStyling={trackStyling}
          audioRef={audioRef}
          image={image}
          title={title}
          artist={artist}
          audioSrc={audioSrc}
          color={color}
          // controlsSize prop removed
        />
      </div>
    </div>

  );
};

export default AudioPlayer;
