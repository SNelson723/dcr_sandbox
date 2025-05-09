import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBottomHourlyItems, getTopHourlyItems } from "../../api/hourly";
import { setBottomItems, setTopItems } from "../../features/hourlySlice";
import { HourlyItem } from "../../types";
import { formatCurrency } from "../../utils";
import { avg, median, totalQty, totalSales } from "../../utils";

const HourlyItems = () => {
  const dispatch = useAppDispatch();
  const { url, date, selectedHour } = useAppSelector((state) => state.app);
  const [showing, setShowing] = useState<string>("top");
  const [widgetData, setWidgetData] = useState<HourlyItem[]>([]);
  const [title, setTitle] = useState<string>("Top 10 Items");

  useEffect(() => {
    if (showing === "top") {
      getTopHourlyItems(url, date, selectedHour)
        .then((resp) => {
          const j = resp.data;
          if (j.error === 0) {
            dispatch(setTopItems(j.items));
            setWidgetData(j.items);
            setTitle("Top 10 Items");
          }
        })
        .catch((e) => console.log(e.message));
    } else {
      getBottomHourlyItems(url, "5/8/2025", "10")
        .then((resp) => {
          const j = resp.data;
          if (j.error === 0) {
            dispatch(setBottomItems(j.items));
            setWidgetData(j.items);
            setTitle("Bottom 10 Items");
          }
        })
        .catch((e) => console.log(e.message));
    }
  }, [showing]);

  return (
    <>
      {widgetData.length ? (
        <div className="flex flex-col p-4 md:row-span-2 max-h-[610px] bg-white rounded-lg shadow-md text-black transition-all duration-200">
          <h2 className="border-b border-b-black font-semibold pb-[1px]">
            {title}
          </h2>
          <div className="flex flex-col w-full divide-gray-950 divide-y border-b border-b-gray-950">
            {widgetData.map((item, i) => (
              <div
                className={`grid grid-cols-[1fr_2fr_1fr_0.5fr] px-1 py-0.5 items-center ${showing === "top" ? "odd:bg-emerald-200" : "odd:bg-blue-200"} even:bg-white`}
                key={`dept_${i}`}
              >
                {/* truncate => this works for not wrapping text and shows the ellipses */}
                <div className="text-sm col-span-2 truncate">{item.f1041}</div>
                <div className="text-right">{formatCurrency(item.f65)}</div>
                <div className="text-right">{item.f64}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 mb-4 my-4 ">
            <div className="px-2 py-3 rounded-lg shadow text-center">
              <div>Total Sales</div>
              <div className="text-lg font-semibold">
                {formatCurrency(totalSales(widgetData))}
              </div>
            </div>
            <div className="px-2 py-4 rounded-lg shadow text-center">
              <div>Total Qty</div>
              <div className="text-lg font-semibold">
                {totalQty(widgetData)}
              </div>
            </div>
            <div className="px-2 py-4 rounded-lg shadow text-center">
              <div>Average Sales</div>
              <div className="text-lg font-semibold">
                {formatCurrency(avg(widgetData))}
              </div>
            </div>
            <div className="px-2 py-3 rounded-lg shadow text-center">
              <div>Median Sales</div>
              <div className="text-lg font-semibold">
                {formatCurrency(median(widgetData))}
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2 gap-3">
            <button
              className={`btn-themeGreen w-1/2`}
              onClick={() => setShowing("top")}
            >
              Top 10
            </button>
            <button
              className={`btn-themeBlue w-1/2`}
              onClick={() => setShowing("bottom")}
            >
              Bottom 10
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HourlyItems;
