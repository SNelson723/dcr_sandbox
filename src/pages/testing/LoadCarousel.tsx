import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { nextIndex } from "../../features/loadCarouselSlice";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  payloadAction?: (payload: string) => void;
  idxOffset?: number;
};

const LoadCarousel = ({ children, className = "" }: CarouselProps) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.loadCarousel);
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.isLoading) {
        if (state.index === totalSlides - 1) {
          clearInterval(interval);
        } else {
          dispatch(nextIndex());
        }
      }
    }, state.duration);

    return () => clearInterval(interval);
  }, [totalSlides, dispatch, state.isLoading, state.index, state.duration]);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${state.index * 100}%)`,
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
