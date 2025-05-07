import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBottomHourlyItems, getTopHourlyItems } from "../../api/hourly";
import { setBottomItems, setTopItems } from "../../features/hourlySlice";

const HourlyItems = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
  const { topItems, bottomItems } = useAppSelector((state) => state.hourly);
  const [showing, setShowing] = useState<string>("top");

  useEffect(() => {
    if (showing === "top") {
      getTopHourlyItems(url, "5/5/2025", "11")
        .then((resp) => {
          const j = resp.data;
          if (j.error === 0) {
            dispatch(setTopItems(j.items));
          }
        })
        .catch((e) => console.log(e.message));
    } else {
      getBottomHourlyItems(url, "5/5/2025", "11")
        .then((resp) => {
          const j = resp.data;
          if (j.error === 0) {
            dispatch(setBottomItems(j.items));
          }
        })
        .catch((e) => console.log(e.message));
    }
  }, [showing]);

  console.log("Top Items: ", topItems);
  console.log("Bottom Items: ", bottomItems);

  return (
    <div className="flex flex-col gap-2 p-4 row-span-2 min-h-[610px] max-h-[610px] bg-white rounded-lg shadow-md">
      {/* Header */}
      <h2 className="border-b border-b-black font-semibold pb-[1px] text-center">
        Hourly Items
      </h2>
      {/* Body */}

      {/* Footer */}
      <div className="flex items-center mb-2 gap-3">
        <button
          className={`${
            showing === "top" ? "btn-themeGreen" : "btn-themeBlue"
          } w-1/2`}
          onClick={() => setShowing("top")}
        >
          Top 10
        </button>
        <button
          className={`${
            showing === "bottom" ? "btn-themeGreen" : "btn-themeBlue"
          } w-1/2`}
          onClick={() => setShowing("bottom")}
        >
          Bottom 10
        </button>
      </div>
    </div>
  );
};

export default HourlyItems;
