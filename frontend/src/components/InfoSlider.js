import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/InfoSlider.css';

const InfoSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState(null);
    const [slideDirection, setSlideDirection] = useState(''); // 'slide-left' or 'slide-right'
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Get total number of slides for circular navigation
    const totalSlides = slides.length;
    
    // Handler for previous slide with circular navigation
    const prevSlide = () => {
        if (isAnimating) return; // Prevent multiple clicks during animation
        setIsAnimating(true);
        
        // Calculate previous slide index
        const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        setNextSlide(prevIndex);
        setSlideDirection('slide-left');

        // Wait for animation to complete before changing slide
        setTimeout(() => {
            setCurrentSlide(prevIndex);
            setNextSlide(null);
            setSlideDirection('');
            setIsAnimating(false);
        }, 300); // Match this with the CSS transition duration
    };
    
    // Handler for next slide with circular navigation
    const nextSlideHandler = () => {
        if (isAnimating) return; // Prevent multiple clicks during animation
        setIsAnimating(true);
        
        // Calculate next slide index
        const nextIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        setNextSlide(nextIndex);
        setSlideDirection('slide-right');
        
        // Wait for animation to complete before changing slide
        setTimeout(() => {
            setCurrentSlide(nextIndex);;
            setNextSlide(null);
            setSlideDirection('');
            setIsAnimating(false);
        }, 300); // Match this with the CSS transition duration
    };
    
    // Get current, next, and previous slide data
    const currentSlideData = slides[currentSlide];
    const nextSlideData = nextSlide !== null ? slides[nextSlide] : null;
    
    // Calculate indices for hover previews
    const nextSlideIndex = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    const prevSlideIndex = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    
    // Get the image URLs for hover previews
    const nextSlideImageUrl = slides[nextSlideIndex].url;
    const prevSlideImageUrl = slides[prevSlideIndex].url;
    
    // Define slide titles based on slide index/alt text
    const slideTitles = {
        "Sonic Energy": "Sound Taking Us Back to Our Roots!",
        "Music Production": "Professional Music Production",
        "Songwriting & Arrangement": "Creative Songwriting & Arrangement"
    };
    
    // Define slide sub-headlines
    const slideSubheadlines = {
        "Sonic Energy": "Percussive, Tribal, Electric and Novel",
        "Production, Songwriting & Arrangement": "State-of-the-art Mixing services, Songwriting & Arrangement",
    };
    
    // Define slide navigation links
    const slideLinks = {
        "Music Production": "/services",
        "Songwriting & Arrangement": "/licensing"
    };
    
    return (
        <div className="info-slider">
            <div 
                className="slider-control prev-control" 
                onClick={prevSlide}
                style={{
                    '--preview-image': `url(${prevSlideImageUrl})`
                }}
            >
                <span className="control-text">PREV</span>
            </div>
            
            <div className="slides-container">
                {/* Current Slide */}
                <div 
                    className={`info-slide current-slide ${slideDirection}`}
                    style={{ 
                        backgroundImage: `url(${currentSlideData.url})` 
                    }}
                >
                    {/* Slide Content Container */}
                    <div className="slide-content">
                        {/* Title Overlay */}
                        <h2 className="slide-title">
                            {slideTitles[currentSlideData.alt] || currentSlideData.alt}
                        </h2>
                        
                        {/* Sub-headline */}
                        <p className="slide-subheadline">
                            {slideSubheadlines[currentSlideData.alt] || ""}
                        </p>
                        
                        {/* Navigation Button */}
                        <Link 
                            to={slideLinks[currentSlideData.alt] || "#"} 
                            className="slide-nav-button"
                        >
                            Buy Premium Beats!
                        </Link>
                    </div>
                </div>
            </div>
            
            <div 
                className="slider-control next-control" 
                onClick={nextSlideHandler}
                style={{
                    '--preview-image': `url(${nextSlideImageUrl})`
                }}
            >
                <span className="control-text">NEXT</span>
            </div>
        </div>  
    );
}

export default InfoSlider;


                //This is unecessary transition animation for the next slide...I might erase it later
                // {/* aah so the data from the next slide is only rendered during transition.*/}
                // {nextSlideData && (
                //     <div 
                //         className={`info-slide next-slide ${slideDirection === 'slide-left' ? 'from-right' : 'from-left'}`}
                //         style={{ 
                //             backgroundImage: `url(${nextSlideData.url})` 
                //         }}
                //     >
                //         {/* Slide Content Container */}
                //         <div className="slide-content">
                //             {/* Title Overlay */}
                //             <h2 className="slide-title">
                //                 {slideTitles[nextSlideData.alt] || nextSlideData.alt}
                //             </h2>
                            
                //             {/* Navigation Button */}
                //             <Link 
                //                 to={slideLinks[nextSlideData.alt] || "#"} 
                //                 className="slide-nav-button"
                //             >
                //                 Learn More
                //             </Link>
                //         </div>
                //     </div>
                // )}
                // const slideTitles = {
                //     "Sonic Energy": "Sound Taking Us Back to Our Roots!",
                //     "Music Production": "Professional Music Production",
                //     "Songwriting & Arrangement": "Creative Songwriting & Arrangement"
                // };
                
                // const slideSubheadlines = {
                //     "Sonic Energy": "Percussive, Tribal, Electric and Modern",
                //     "Music Production": "State-of-the-art recording and mixing services",
                //     "Songwriting & Arrangement": "Expert composition for your creative vision"
                // };