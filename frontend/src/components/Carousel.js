import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Carousel.css';
// Import the image directly if it's in your assets folder
// import carouselImage from '../assets/images/carousel_image.png';

const CustomCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel id="myCarousel" className="carousel">
                <Carousel.Item>
                    <img 
                        // If using import: src={carouselImage}
                        // For public folder:
                        src={process.env.PUBLIC_URL + '/assets/images/carousel_image.png'} 
                        alt="New York" 
                        className="carouselImage" 
                    />
                    <Carousel.Caption>
                        <h3>New York</h3>
                        <p>The atmosphere in New York is lorem ipsum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        src="https://www.w3schools.com/w3images/la.jpg" 
                        alt="Los Angeles" 
                        className="carouselImage" 
                    />
                    <Carousel.Caption>
                        <h3>Los Angeles</h3>
                        <p>The atmosphere in Los Angeles is lorem ipsum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more slides as needed */}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;