import { useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks";
import * as d3 from "d3";

const ChartPageTwo = () => {
  const { subSales, dateSales } = useAppSelector((state) => state.chart);

  const gx = useRef<SVGGElement | null>(null);
  const gy = useRef<SVGGElement | null>(null);
  const x = d3.scaleLinear([0, subSales.length - 1], [40, 620]);
  const y = d3.scaleLinear(
    d3.extent(subSales.map((sale) => sale.sales)) as [number, number],
    [370, 20]
  );
  const line = d3.line((_d: number, i: number) => x(i), y);

  useEffect(() => {
    if (gx.current) {
      void d3.select(gx.current).call(d3.axisBottom(x));
    }
  }, [gx, x]);
  useEffect(() => {
    if (gy.current) {
      void d3.select(gy.current).call(d3.axisLeft(y));
    }
  }, [gy, y]);

  return (
    <div className="mt-12">
      {subSales.length > 0 && dateSales.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 w-[60vw]">
          <svg width={640} height={400}>
            <g ref={gx} transform={`translate(0,${370})`} />
            <g ref={gy} transform={`translate(40,0)`} />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              d={line(subSales.map((sale) => sale.sales)) as string}
            />
            <g fill="white" stroke="currentColor" strokeWidth="1.5">
              {subSales.map((sale, i) => (
                <circle key={i} cx={x(i)} cy={y(sale.sales)} r="2.5" />
              ))}
            </g>
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default ChartPageTwo;
