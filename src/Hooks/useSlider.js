import { useState } from 'react';

/**
 * Хук для создания бесконечного слайдера.
 * @param {number} totalCount - общее количество слайдов.
 */

function useInfiniteSlider(totalCount) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCount);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCount) % totalCount);
    };

    return { currentIndex, next, prev };
}

export default useInfiniteSlider;
