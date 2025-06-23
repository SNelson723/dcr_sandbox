import { useAppSelector } from "../hooks";
import { AgCharts } from "ag-charts-react";

const ChartPage = () => {
  const { chartData } = useAppSelector((state) => state.chart);

  return (
    <div className="mt-12 w-[40vw]">
      <h1>Chart Page</h1>
      <AgCharts options={{
        data: chartData,
        series: [{ type: 'line', xKey: 'month', yKey: 'iceCreamSales' }]
      }} />
    </div>
  );
};

export default ChartPage;
