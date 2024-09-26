import React, { useState } from 'react';
import FullScreenViewer from './FullScreenViewer';
import './Photogallery.css'

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const Photogallery = () => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

    const handleCloseViewer = () => {
        setCurrentIndex(null);
    }

    return (
        <>
        <div className='photo-gallery'>
            <div className='gallery-grid'>
                {images.map((src, index) => (
                    <img
                    key={index}
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="gallery-image"
                    onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            {currentIndex !== null && (
                <FullScreenViewer
                images={images}
                currentIndex={currentIndex}
                onClose={handleCloseViewer}
                setCurrentIndex={setCurrentIndex}
                />
                )}
        </div>
        </>
    );
};

export default Photogallery;

