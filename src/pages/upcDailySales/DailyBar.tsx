import { ResponsiveBar } from "@nivo/bar";
import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";

// type BarData = {};

const DailyBar = () => {
  const state = useAppSelector((state) => state.upc);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  // Need to figure out here how to tranform the data to the above format for individual upcs vs multiple upcs
  useEffect(() => {
    if (state.daily.length > 0 && state.selectedUpcs.length > 0) {
      setData(
        state.daily.filter((item) =>
          state.selectedUpcs.includes(item.product_code)
        )
      );
      // const values = state.daily.map((item) => item.value);
      // setMin(Math.min(...values));
      // setMax(Math.max(...values));
    } else {
      setData([]);
      setMin(0);
      setMax(0);
    }
  }, [state.daily, state.selectedUpcs]);

  console.log('Data for DailyBar:', data);

  return (
    <div className="bg-white h-full w-full p-4 rounded-lg shadow-lg">
      {data.length ? (
        <ResponsiveBar
          data={data}
          indexBy="week"
          labelSkipWidth={12}
          labelSkipHeight={12}
          // colors={["#3b82f6"]}
          groupMode="grouped"
          keys={[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ]}
          labelTextColor={"#ffffff"}
          borderRadius={4}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 0,
              itemsSpacing: 3,
              itemWidth: 100,
              itemHeight: 16,
            },
          ]}
          axisLeft={{ legend: "Sales", legendOffset: -40 }}
          margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
          tooltipLabel={(d) => `Item: ${d.data.product_code}`}
        />
      ) : (
        <div>No data selected</div>
      )}
    </div>
  );
};

export default DailyBar;
