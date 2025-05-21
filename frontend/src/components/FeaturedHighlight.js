import React from 'react';
import '../styles/FeaturedHighlight.css';

const FeaturedHighlight = () => {
  // Social media icons from public assets folder
  const socialIcons = [
    { name: 'instagram', icon: '/assets/images/instagram.svg', url: 'https://www.instagram.com/gardlyradicle/' },
    { name: 'facebook', icon: '/assets/images/facebook-color.svg', url: 'https://www.instagram.com/gardlyradicle/' },
    { name: 'youtube', icon: '/assets/images/youtube.svg', url: 'https://www.instagram.com/gardlyradicle/' },
    { name: 'spotify', icon: '/assets/images/spotify.svg', url: 'https://www.instagram.com/gardlyradicle/' },
    { name: 'twitter', icon: '/assets/images/twitter.svg', url: 'https://www.instagram.com/gardlyradicle/' },
    { name: 'tiktok', icon: '/assets/images/tiktok.png', url: 'https://www.instagram.com/gardlyradicle/' },
    { name: 'soundcloud', icon: '/assets/images/soundcloud.png', url: 'https://www.instagram.com/gardlyradicle/' },
    { name: 'vinyl', icon: '/assets/images/vinyl-red.png', url: '/catalog' }
  ];

  return (
    <div className="featured-highlight-container">
      <div className="featured-highlight-content">
        <div className="featured-text">
          <h3>Follow for New Releases Every Month!</h3>
        </div>
        <div className="social-icons">
          {socialIcons.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
            >
              <img 
                src={process.env.PUBLIC_URL + social.icon} 
                alt={social.name} 
                className="social-icon" 
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHighlight;
