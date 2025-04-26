import React, { useEffect, useState } from 'react';
import '../styles/AudioPlayer.css';
import '../styles/Track.css';
import '../styles/SkeuomorphicButtons.css';
import PricingTable from './PricingTable';
import { useSelector, useDispatch } from 'react-redux';
import { openPricingModal, closePricingModal } from '../features/priceLicensing/priceLicensing.js';

const Track = ({ track, isActive, onClick, size }) => {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { currentTrack } = useSelector((state) => state.priceLicensing); // read nad destructure currentTrack from state
  
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
  
  // Handle cart icon click to open pricing modal
  const handleCartClick = (e) => {
    e.preventDefault();
    dispatch(openPricingModal(track));
    // currentTrack = track; //After reading the track from the useSelector, assign it to the currentTrack state
  };
  
  // Close the pricing modal
  const closePricingModal = () => {
    dispatch(closePricingModal());
  };

  return (
    <>
      <div 
        className={`track-item ${isActive ? 'active' : ''}`}
        // style={isActive ? {
        //   // transform: 'scale(1.05)',
        //   // boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        //   // border: '1px solid rgba(255, 255, 255, 0.2)',
        //   // borderRadius: '12px',
        //   // padding: '8px',
        //   background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.003))',
        //   // backdropFilter: 'blur(5px)'
        // } : {}}
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
                className="track-icon stream-icon skeuomorphic-btn light with-glare"
                src={`${process.env.PUBLIC_URL}/assets/images/icons8-youtube-music-50.png`}
                alt="Stream"
              />
              <span className="tooltip">Stream</span>
            </a>
          )}
          {track.links?.buyLink && (
            // <a target="_blank" href="https://icons8.com/icon/bIBxUlWeBjq8/cart">Cart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            // https://icons8.com/icons/set/music--static--red--corners-round
            <a href="#" onClick={handleCartClick}>
              <img
                className="track-icon buy-icon skeuomorphic-btn primary with-glare"
                src={`${process.env.PUBLIC_URL}/assets/images/icons8-cart-65.png`}
                alt="Buy"
              />
              <span className="tooltip">Buy</span>
            </a>
          )}
          {track.links?.downloadLink && (
            <a href={track.links.downloadLink} target="_blank" rel="noopener noreferrer">
              <img
                className="track-icon download-icon skeuomorphic-btn accent with-glare"
                src={`${process.env.PUBLIC_URL}/assets/images/icons8-listening-to-music-on-headphones-100.png`}
                alt="Download"
              />
              <span className="tooltip">Download</span>
            </a>
          )}
        </div>
        <div className="track-label">
          <h4 className="track-title">{track.title}</h4>
          <p className="track-artist">{track.artist}</p>
        </div>
      </div>
      
      {/* Pricing Table Modal */}
      {/* <PricingTable 
        isOpen={isPricingModalOpen}
        onClose={closePricingModal}
        track={track}
      /> */}
    </>
  );
};

export default Track;