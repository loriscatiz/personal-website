import React from 'react';

interface ImageHoverProps {
    imgsrc?: string; // Default image URL
    hoverimgsrc?: string; // Hover image URL (optional)
    alt?: string; // Alt text for accessibility
    className?: string; // Optional extra classes
}

const ImageHover: React.FC<ImageHoverProps> = ({
    imgsrc,
    hoverimgsrc,
    alt = '',
    className = '',
}) => {
    return (
        <div
            className={`relative w-full overflow-clip rounded-t-[10px] shadow-lg ${className}`}
        >
            <div
                style={{
                    backgroundImage: `url(${hoverimgsrc})`,
                }}
                className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 hover:opacity-100"
            ></div>
            <img src={imgsrc} alt={alt} />
        </div>
    );
};

export default ImageHover;
