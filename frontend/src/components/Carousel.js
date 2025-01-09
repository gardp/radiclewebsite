import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/Carousel.css';

const CustomCarousel = () => {
    return (
        <Carousel id="myCarousel" className={styles.carousel}>
            <Carousel.Item>
                <img src="https://www.w3schools.com/w3images/la.jpg" alt="New York" className={styles.carouselImage} />
                <Carousel.Caption>
                    <h3>New York</h3>
                    <p>The atmosphere in New York is lorem ipsum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://www.w3schools.com/w3images/la.jpg" alt="New York" className={styles.carouselImage} />
                <Carousel.Caption>
                    <h3>New York</h3>
                    <p>The atmosphere in New York is lorem ipsum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Add more slides as needed */}
        </Carousel>
    );
};

export default CustomCarousel;