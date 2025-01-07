import React from 'react';

interface ImageHoverProps {
    imgsrc?: string; // Default image URL
    hoverimgsrc?: string; // Hover image URL (optional)
    alt?: string; // Alt text for accessibility
    className?: string; // Optional extra classes
}

const ImageHover: React.FC<ImageHoverProps> = ({ imgsrc, hoverimgsrc, alt = '', className = '' }) => {
    return (
        <div className={`relative w-full aspect-video ${className}`}>
            {/* Default Image */}
            <img
                src={imgsrc}
                alt={alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoverimgsrc ? 'opacity-100 hover:opacity-0' : ''}`}
            />
            {/* Hover Image (conditionally rendered) */}
            {hoverimgsrc && (
                <img
                    src={hoverimgsrc}
                    alt={`${alt} - Hover`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100"
                />
            )}
        </div>
    );
};

export default ImageHover;
