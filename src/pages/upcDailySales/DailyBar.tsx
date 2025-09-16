import { ResponsiveBar } from "@nivo/bar";
import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";

// type BarData = {};

const DailyBar = () => {
  const state = useAppSelector((state) => state.upc);
  // const [min, setMin] = useState<number>(0);
  // const [max, setMax] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  // Need to figure out here how to tranform the data to the above format for individual upcs vs multiple upcs
  useEffect(() => {
    if (state.daily.length > 0 && state.currentUpc) {
      setData(
        state.daily
          .filter((item) => state.currentUpc === item.product_code)
          .map((item) => ({
            ...item,
            Mon: item.Monday,
            Tue: item.Tuesday,
            Wed: item.Wednesday,
            Thu: item.Thursday,
            Fri: item.Friday,
            Sat: item.Saturday,
            Sun: item.Sunday,
          }))
      );
      // const values = state.daily.map((item) => item.value);
      // setMin(Math.min(...values));
      // setMax(Math.max(...values));
    } else {
      setData([]);
      // setMin(0);
      // setMax(0);
    }
  }, [state.daily, state.currentUpc]);

  return (
    <div className="bg-white h-full w-fullrounded-lg shadow-lg">
      {data.length ? (
        <>
          <div className="bg-blue-500 rounded-t-lg py-1 text-sm text-white pl-4">
            {state.currentUpc}
          </div>
          <ResponsiveBar
            data={data}
            indexBy="week"
            // colors={[
            //   "#bfdbfe",
            //   "#60a5fa",
            //   "#3b82f6",
            //   "#7dd3fc",
            //   "#a7f3d0",
            //   "#34d399",
            //   "#10b981",
            // ]}
            groupMode="grouped"
            keys={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            // labelTextColor={"#ffffff"}
            enableLabel={false}
            borderRadius={4}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom",
                direction: "row",
                // translateX: 0,
                translateY: 50,
                itemsSpacing: 3,
                itemWidth: 90,
                itemHeight: 16,
              },
            ]}
            axisLeft={{ legend: "Sales", legendOffset: -40 }}
            margin={{ top: 20, right:20, bottom: 90, left: 60 }}
            tooltipLabel={(d) => `${d.id}`}
            onClick={(d) => {
              console.log("Clicked bar:", d);
            }}
          />
        </>
      ) : (
        <div>No data selected</div>
      )}
    </div>
  );
};

export default DailyBar;
