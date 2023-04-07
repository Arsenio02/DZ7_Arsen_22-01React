import React, { useState } from 'react';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';

const Slider = () => {
    const photos = [
        {
            src: photo1,
            caption: 'Фото 1',
        },
        {
            src: photo2,
            caption: 'Фото 2',
        },
        {
            src: photo3,
            caption: 'Фото 3',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div>
            <img src={photos[currentIndex].src} alt={photos[currentIndex].caption} />
            <p>{photos[currentIndex].caption}</p>
            <button onClick={handlePrev}>Назад</button>
            <button onClick={handleNext}>Далее</button>
        </div>
    );
};

export default Slider;
