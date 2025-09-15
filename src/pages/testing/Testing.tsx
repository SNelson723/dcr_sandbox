import LoadCarousel from "./LoadCarousel";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { startLoading } from "../../features/loadCarouselSlice";

const Testing = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.loadCarousel);

  useEffect(() => {}, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center py-12 px-4 h-screen gap-8">
      <div className="px-12 text-2xl font-medium bg-[#10b981] py-2 rounded-lg shadow-lg">
        <h1 className="mb-4">Testing Page</h1>
        <p className="mb-4">This is a placeholder for testing purposes.</p>
      </div>
      <button
        onClick={() => dispatch(startLoading())}
        className="bg-blue-500 px-10 py-2 border-2 border-blue-500 rounded-lg hover:bg-blue-200 
          hover:text-black text-white font-medium transition-all duration-200"
      >
        Start
      </button>
      <LoadCarousel className="w-1/4 h-64 bg-gray-200 border shadow-md">
        <div className="flex h-64 items-center justify-center bg-white font-bold">
          Hang tight, loading...
        </div>
        <div className="flex h-64 items-center justify-center bg-white font-bold">
          Data received, processing...
        </div>
        <div className="flex h-64 items-center justify-center bg-white font-bold">
          Finalizing, almost there...
        </div>
      </LoadCarousel>
    </div>
  );
};

export default Testing;
