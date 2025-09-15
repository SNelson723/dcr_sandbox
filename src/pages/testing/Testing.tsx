import { useRef, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { startLoading, stopLoading } from "../../features/loadCarouselSlice";
import { getPriceOpt } from "../../api/data";
import LoadCarousel from "./LoadCarousel";

const fileExtensions = [".csv"];

const Testing = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) {
      alert("No file selected.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    if (!fileExtensions.some((ext) => e.target.files![0].name.endsWith(ext))) {
      alert("Invalid file type. Please select a .csv file.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    const selected = e.target.files[0];
    setFile(selected);
  };

  const getData = () => {
    if (!file) {
      alert("No file selected.");
      return;
    }
    dispatch(startLoading());
    getPriceOpt(file)
      .then((response) => {
        const j = response.data;
        console.log("Response data:", j);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => dispatch(stopLoading()));
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center py-12 px-4 h-screen gap-8">
      <div className="px-12 text-2xl font-medium bg-[#10b981] py-2 rounded-lg shadow-lg">
        <h1 className="mb-4">Testing Page</h1>
        <p className="mb-4">This is a placeholder for testing purposes.</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={getData}
          className="bg-blue-500 px-10 py-2 border-2 border-blue-500 rounded-lg hover:bg-blue-200 
          hover:text-black text-white font-medium transition-all duration-200"
        >
          Start
        </button>
        <label
          className="bg-blue-500 px-11 py-[9.5px] border-2 border-blue-500 rounded-lg hover:bg-blue-200 
          hover:text-black text-white font-medium transition-all duration-200"
        >
          File
          <input
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={handleFileChange}
          />
        </label>
      </div>
      <LoadCarousel className="w-1/4 h-64 bg-gray-200 border shadow-md">
        <div className="flex h-64 items-center justify-center bg-white font-bold">
          Request sent...
        </div>
        <div className="flex h-64 items-center justify-center bg-white font-bold">
          Recieving data, loading...
        </div>
        <div className="flex h-64 items-center justify-center bg-white font-bold">
          Data received, processing...
        </div>
        <div className="flex h-64 items-center justify-center bg-white font-bold">
          Finalizing, almost there...
        </div>
      </LoadCarousel>

      <div></div>
    </div>
  );
};

export default Testing;
