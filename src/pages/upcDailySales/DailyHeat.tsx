import { ResponsiveHeatMap } from "@nivo/heatmap";
import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";

const DailyHeat = () => {
  const state = useAppSelector((state) => state.upc);
  const [heatData, setHeatData] = useState<any[]>([]);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  // data format => [{id: string; data: {x: string; y: number}[]}]
  // id is week and x is day of week, y is value
  useEffect(() => {
    if (state.daily.length > 0 && state.currentUpc) {
      const filtered = state.daily.filter(
        (item) => item.product_code === state.currentUpc
      );
      const newMin = Math.min(
        ...filtered.flatMap((item) => [
          item.Monday,
          item.Tuesday,
          item.Wednesday,
          item.Thursday,
          item.Friday,
          item.Saturday,
          item.Sunday,
        ])
      );
      const newMax = Math.max(
        ...filtered.flatMap((item) => [
          item.Monday,
          item.Tuesday,
          item.Wednesday,
          item.Thursday,
          item.Friday,
          item.Saturday,
          item.Sunday,
        ])
      );
      setMin(newMin);
      setMax(newMax);
      const transformed = filtered.map((item) => ({
        id: item.week,
        data: [
          { x: "Monday", y: item.Monday },
          { x: "Tuesday", y: item.Tuesday },
          { x: "Wednesday", y: item.Wednesday },
          { x: "Thursday", y: item.Thursday },
          { x: "Friday", y: item.Friday },
          { x: "Saturday", y: item.Saturday },
          { x: "Sunday", y: item.Sunday },
        ],
      }));
      setHeatData(transformed);
    } else {
      setHeatData([]);
    }
  }, [state.daily, state.currentUpc]);

  // console.log("Heatmap data:", heatData, min, max);

  // left axis is the id (week) and the top axis is the x (day of week)
  // y is the value for that day of the week in that week
  // need to transform state.daily into that format
  return (
    <div className="bg-white h-full w-full rounded-lg shadow-lg">
      {heatData.length ? (
        <>
          <div className="bg-blue-500 rounded-t-lg py-1 text-sm text-white pl-4">
            {state.currentUpc}
          </div>
          <ResponsiveHeatMap
            data={heatData}
            margin={{ top: 30, right: 90, bottom: 60, left: 90 }}
            valueFormat=">-.2s"
            axisTop={{ tickRotation: 0 }}
            axisLeft={{ legend: "week", legendOffset: -80 }}
            colors={{
              type: "diverging",
              colors: ["#bfdbfe", "#3b82f6", "#10b981"],
              divergeAt: 0.29,
              minValue: min,
              maxValue: max,
            }}
            labelTextColor={"white"}
            legends={[
              {
                anchor: "top-right",
                translateX: 40,
                translateY: 0,
                length: 270,
                thickness: 15,
                direction: "column",
                tickPosition: "after",
                tickSize: 5,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: ">-.2s",
                title: "Sales →",
                titleAlign: "start",
                titleOffset: 4,
              },
            ]}
          />
        </>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          Select a Upc to view its weekly data
        </div>
      )}
    </div>
  );
};

export default DailyHeat;
