import { useEffect, useRef, useState } from "react";
import { getDailySales } from "../../api/data";
import { useAppDispatch, useAppSelector } from "../../hooks";
import DailyBar from "./DailyBar";
import {
  clearData,
  setAllUpcs,
  setCurrentUpc,
  setDailyData,
  // setSelectedUpcs,
  UpcDaily,
} from "../../features/upcSlice";
import DailyHeat from "./DailyHeat";

const fileExtensions = [".csv"];

const useHeight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const updateHeight = () => {
    if (ref.current) {
      const perc = window.innerHeight > 826 ? 0.635 : 0.585;
      setHeight(ref.current.getBoundingClientRect().height * perc);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return { ref, height };
};

const UpcDailySales = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const { ref, height } = useHeight();
  const state = useAppSelector((state) => state.upc);

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
    getDailySales(file)
      .then((response) => {
        const j = response.data;
        if (j.error === 0) {
          dispatch(
            setDailyData(
              j.daily.map((item: UpcDaily) => ({
                ...item,
                week: item.week.split("T")[0],
              }))
            )
          );
          dispatch(
            setAllUpcs(
              j.daily.reduce((acc: string[], item: UpcDaily) => {
                if (!acc.includes(item.product_code)) {
                  acc.push(item.product_code);
                }
                return acc;
              }, [])
            )
          );
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const stores = [
    "Store 1",
    "Store 2",
    "Store 3",
    "Store 4",
    "Store 5",
    "Store 6",
    "Store 7",
    "Store 8",
    "Store 9",
    "Store 10",
  ];

  const isBottom = (i: number) => {
    return i === stores.length - 1 ? "rounded-b-lg" : "";
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // dispatch(setSelectedUpcs(e.target.value));
    dispatch(setCurrentUpc(e.target.value));
  };

  return (
    <div className="w-screen h-screen">
      <div className="bg-gray-100 w-full grid grid-rows-[1fr_1fr] gap-4 p-4 min-h-[93%] max-h-[93%]">
        {/* row one */}
        <div className="grid grid-cols-[0.3fr_1fr_1.5fr] gap-4">
          {/* row 1 col 1 */}
          <div className="rounded-lg h-full relative" ref={ref}>
            <button
              onClick={getData}
              className="bg-blue-500 w-full px-10 py-1 border-2 border-blue-500 rounded-lg hover:bg-blue-200 
          hover:text-black text-white font-medium transition-all duration-200"
            >
              Start
            </button>
            <button
              onClick={() => dispatch(clearData())}
              className="bg-blue-500 w-full px-10 py-1 border-2 mt-1 border-blue-500 rounded-lg hover:bg-blue-200 
          hover:text-black text-white font-medium transition-all duration-200"
            >
              Reset
            </button>
            <label
              className="bg-blue-500 block w-full text-center mt-1 px-11 py-1 border-2 border-blue-500 rounded-lg hover:bg-blue-200 
          hover:text-black text-white font-medium transition-all duration-200 cursor-pointer"
            >
              File
              <input
                type="file"
                className="hidden"
                ref={inputRef}
                onChange={handleFileChange}
              />
            </label>
            <div className="bg-white rounded-lg shadow-lg absolute w-full mt-1">
              <div className="bg-blue-500 py-1 text-white font-medium text-center rounded-t-lg">
                Selected Stores
              </div>
              <div
                className="bg-white overflow-y-scroll no-scrollbar w-full rounded-b-lg"
                style={{ maxHeight: height, minHeight: height }}
              >
                {stores.map((store, i) => (
                  <div
                    className={`even:bg-white odd:bg-blue-200 py-0.5 px-2 ${isBottom(
                      i
                    )}`}
                  >
                    {store}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg text-xs relative">
            <div className="border-2 m-4 rounded-lg border-blue-500 no-scrollbar max-h-[90%] overflow-y-scroll absolute w-24">
              {state.allUpcs.map((u: string, i) => (
                <div
                  key={i}
                  className={`cursor-pointer p-1 ${
                    state.currentUpc === u ? "bg-blue-200" : "bg-white"
                  }`}
                  onClick={() => handleSelect({ target: { value: u } } as any)}
                >
                  {u}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">table here???</div>
        </div>
        {/* row two */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {/* <DailyBar /> */}
          <DailyHeat />
          <DailyBar />
        </div>
      </div>
    </div>
  );
};

export default UpcDailySales;
