import React, { useState, useEffect } from "react";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  payloadAction?: (payload: string) => void;
  idxOffset?: number;
};

const LoadCarousel = ({ children, className = "" }: CarouselProps) => {
  const [index, setIndex] = useState<number>(0);
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => {
        if (i >= totalSlides - 1) {
          clearInterval(interval);
          return i;
        }
        return i + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, i) => (
          <div className="w-full flex-shrink-0" key={i}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadCarousel;
