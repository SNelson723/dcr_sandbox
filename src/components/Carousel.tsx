import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { setCarouselTitle } from "../features/appSlice";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  const dispatch = useAppDispatch();
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  const totalSlides = React.Children.count(children); // Counts the number of children
  const goTo = (i: number) => setVisibleIndex((i + totalSlides) % totalSlides); // Wraps around the index
  const next = () => goTo(visibleIndex + 1);
  const prev = () => goTo(visibleIndex - 1);

  // Got to set the title based on the index of the slide
  useEffect(() => {
    const child = React.Children.toArray(children)[visibleIndex];
    if (React.isValidElement(child) && (child as React.ReactElement<{ title?: string }>).props.title) {
      const title = (child as React.ReactElement<{ title?: string }>).props.title!;
      dispatch(setCarouselTitle(title));
    }
  }, [visibleIndex]);

  return (
    <div className="relative max-w-[70vw] overflow-hidden max-h-[70vh] h-[70vh]">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${visibleIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, i) => (
          <div key={`child_${i}`} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* buttons and dots */}

      <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 mb-4 flex gap-2">
        <button
          onClick={prev}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white py-1 px-2 hover:bg-blue-400 transition-all duration-300 rounded-full p-1 shadow"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white py-1 px-2 hover:bg-blue-400 transition-all duration-300 rounded-full p-1 shadow"
        >
          Next
        </button>
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={`dot_${i}`}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full mx-1 ${
              i === visibleIndex ? "bg-emerald-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
