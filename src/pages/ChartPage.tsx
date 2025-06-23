import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
// import { AgCharts } from "ag-charts-react";
import { getSubSales, getDateSales } from "../api/charts";
import { JsonError } from "../types";
import { setSubSales, setDateSales } from "../features/chartSlice";
import {
  VictoryPie,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryScatter,
} from "victory";

const BgComp = () => {
  return (
    <div>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4b6cb7" />
            <stop offset="100%" stopColor="#182848" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient1)" />
      </svg>
    </div>
  );
};

const ChartPage = () => {
  const { subSales, dateSales } = useAppSelector((state) => state.chart);
  const { devUrl } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  // const [minSubSale, setMinSubSale] = useState<number>(0);
  // const [maxSubSale, setMaxSubSale] = useState<number>(0);
  const [minDateSale, setMinDateSale] = useState<number>(0);
  const [maxDateSale, setMaxDateSale] = useState<number>(0);

  useEffect(() => {
    getSubSales(devUrl)
      .then((resp) => {
        const j = resp.data;
        if (j.error == 0) {
          dispatch(setSubSales(j.sales));
        }
      })
      .catch((err: JsonError) => {
        console.error("Error fetching sub sales:", err.message);
      });

    getDateSales(devUrl)
      .then((resp) => {
        const j = resp.data;
        if (j.error == 0) {
          const copy = [...j.sales].map((sale) => {
            return {
              ...sale,
              sale_date: sale.sale_date.split("T")[0],
            };
          });
          dispatch(setDateSales(copy));
          // Calculate min and max sales for date sales
          const salesValues = copy.map((sale) => sale.sales);
          setMinDateSale(Math.min(...salesValues));
          setMaxDateSale(Math.max(...salesValues));
        }
      })
      .catch((err: JsonError) => {
        console.error("Error fetching date sales:", err.message);
      });
  }, []);

  return (
    <div className="mt-12">
      {/* <div className="grid grid-cols-2 gap-4">
        <AgCharts
          options={{
            data: dateSales,
            series: [
              { type: "area", xKey: "sale_date", yKey: "sales" },
              { type: "area", xKey: "sale_date", yKey: "quantity" },
            ],
          }}
        />
        <AgCharts
          options={{
            data: subSales,
            series: [
              {
                type: "bar",
                xKey: "sub_department_description",
                yKey: "sales",
              },
              {
                type: "line",
                xKey: "sub_department_description",
                yKey: "quantity",
              },
            ],
          }}
        />

        <AgCharts
          options={{
            data: dateSales,
            series: [
              {
                type: 'donut',
                calloutLabelKey: 'sale_date',
                angleKey: 'sales',
                // type: "radial-bar",
                // radiusKey: "sales",
                // angleKey: "quantity",
                // angleName: "sale_date",
              },
            ],
          }}
        />
      </div> */}
      {subSales.length > 0 && dateSales.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 w-[60vw]">
          {/* <VictoryChart
            domainPadding={{ x: 15, y: 20 }}
            theme={VictoryTheme.clean}
            horizontal
          >
            <VictoryBar
              data={dateSales}
              domain={{ y: [minDateSale, maxDateSale] }}
              x="sale_date"
              y="sales"
              height={300}
              width={600}
              style={{
                data: { fill: "white" },
                labels: { fill: "#f0f1f2" },
              }}
            />
          </VictoryChart> */}
          {/* <svg viewBox="0 0 400 400">
            <VictoryPie
              standalone={false}
              data={subSales}
              padAngle={5}
              x="sub_department_description"
              y="sales"
              innerRadius={60}
              // labelRadius={40}
              height={300}
              colorScale={["#c43a31", "#f0f1f2", "#4b6cb7", "#182848"]}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 20 }}
              text="Subs"
              x={200}
              y={150}
            />
          </svg> */}
          <VictoryChart
            domainPadding={{ x: 0 }}
            theme={VictoryTheme.clean}
            style={{ parent: { background: "#4b6cb7", borderRadius: 25, fontSize: 12 } }}
          >
            <VictoryScatter
              size={7}
              data={subSales}
              x="sub_department_description"
              y="sales"
              style={{ data: { fill: "#f0f1f2" } }}
            />
          </VictoryChart>
        </div>
      ) : null}
    </div>
  );
};

export default ChartPage;
