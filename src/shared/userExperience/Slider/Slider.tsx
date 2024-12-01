import { useState } from 'react';
import { SliderProps } from './Slider.types';
import { Button } from '../Button';

const Slider = <T,>({ items, renderItem, itemsToShow = 1, className }: SliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - itemsToShow : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + itemsToShow >= items.length ? 0 : prev + 1));
  };

  const transformStyle = {
    transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)`,
  };

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <div className="flex transition-transform duration-300" style={transformStyle}>
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `${100 / itemsToShow}%` }}>
            {renderItem(item)}
          </div>
        ))}
      </div>

      <Button className="absolute left-4 top-1/2" onClick={handlePrev} aria-label="Previous">
        &#10094;
      </Button>

      <Button className="absolute right-4 top-1/2" onClick={handleNext} aria-label="Next">
        &#10095;
      </Button>
    </div>
  );
};

export default Slider;
