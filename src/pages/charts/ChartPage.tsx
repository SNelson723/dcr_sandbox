import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getSubSales, getDateSales } from "../api/charts";
import { JsonError } from "../types";
import { setSubSales, setDateSales } from "../features/chartSlice";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryScatter,
  VictoryLine,
} from "victory";

import { Pie } from "@nivo/pie";

const ChartPage = () => {
  const { subSales, dateSales } = useAppSelector((state) => state.chart);
  const { devUrl } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

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
        }
      })
      .catch((err: JsonError) => {
        console.error("Error fetching date sales:", err.message);
      });
  }, []);

  return (
    <div className="mt-12">
      {subSales.length > 0 && dateSales.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 w-[60vw]">
          <VictoryChart
            domainPadding={{ x: 15, y: 20 }}
            theme={VictoryTheme.clean}
            style={{
              parent: {
                background: "#ffffff",
                borderRadius: 25,
                boxShadow: "0 3px 10px rgba(0,0,0,0.5)",
              },
            }}
          >
            <VictoryBar
              data={dateSales}
              x="sale_date"
              y="sales"
              height={300}
              width={600}
            />
          </VictoryChart>
          <VictoryChart
            domain={{ x: [0.8, 5.1] }}
            theme={VictoryTheme.clean}
            style={{
              parent: {
                background: "#ffffff",
                borderRadius: 25,
                boxShadow: "0 3px 10px rgba(0,0,0,0.5)",
              },
            }}
          >
            <VictoryScatter
              standalone={false}
              size={7}
              data={subSales}
              x="sub_department_description"
              y="sales"
              style={{ data: { fill: "#f0f1f2" } }}
            />
            <VictoryLine
              standalone={false}
              data={subSales}
              x="sub_department_description"
              y="sales"
              style={{ data: { stroke: "#f0f1f2" } }}
            />
          </VictoryChart>
          <Pie
            data={subSales.map((sale) => ({
              id: sale.sub_department_description,
              label: sale.sub_department_description,
              value: sale.sales,
            }))}
            width={600}
            height={400}
            margin={{ top: 40, bottom: 80 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            colors={[
              "#10b981",
              "#BBF7D0",
              "#f97316",
              "#FED7AA",
              "#3b82f6",
              "#BFDBFE",
            ]}
            activeOuterRadiusOffset={10}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="black"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 5]] }}
          />
          <Pie
            data={dateSales.map((sale) => ({
              id: sale.sale_date,
              label: sale.sale_date,
              value: sale.sales,
            }))}
            width={600}
            height={400}
            margin={{ top: 40, bottom: 80 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            colors={[
              "#10b981",
              "#BBF7D0",
              "#f97316",
              "#FED7AA",
              "#3b82f6",
              "#BFDBFE",
            ]}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="black"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 5]] }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ChartPage;
