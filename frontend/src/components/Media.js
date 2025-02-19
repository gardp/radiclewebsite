import React from 'react';
import '../styles/Media.css';

const Media = () => {
    // Sample media items - replace with your actual content
    const mediaItems = [
        {
            type: 'video',
            src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
            title: 'Latest Music Video',
            description: 'Check out our latest music video release'
        },
        {
            type: 'image',
            src: process.env.PUBLIC_URL + '/assets/images/sample-image-1.jpg',
            title: 'Studio Session',
            description: 'Behind the scenes at the studio'
        },
        {
            type: 'video',
            src: 'https://www.youtube.com/embed/ANOTHER_VIDEO_ID',
            title: 'Live Performance',
            description: 'Live at the Summer Festival'
        },
        {
            type: 'image',
            src: process.env.PUBLIC_URL + '/assets/images/sample-image-2.jpg',
            title: 'Album Cover',
            description: 'New album dropping soon'
        }
    ];

    const renderMediaContent = (item) => {
        if (item.type === 'video') {
            return (
                <iframe
                    src={item.src}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            );
        } else {
            return <img src={item.src} alt={item.title} />;
        }
    };

    return (
        <div className="media-container">
            <div className="media-grid">
                {mediaItems.map((item, index) => (
                    <div key={index} className="media-item">
                        <div className="media-content">
                            {renderMediaContent(item)}
                        </div>
                        <div className="media-caption">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
