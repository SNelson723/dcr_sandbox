import TopHourlyCats from "../components/widgets/TopHourlyCats";
import TopHourlyDepts from "../components/widgets/TopHourlyDepts";
import TopHourlySubDepts from "../components/widgets/TopHourlySubDepts";
import TopHourlyTenders from "../components/widgets/TopHourlyTenders";
import HourlyItems from "../components/widgets/HourlyItems";
import { useRef } from "react";

interface HourlyProps {
  title?: string;
}

const Hourly = ({ title = "Hourly" }: HourlyProps) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} id={title} className="grid grid-cols-4 gap-2 items-center justify-center data-[query-id=hourly]">
      <TopHourlyDepts />
      <TopHourlySubDepts />
      <TopHourlyTenders />
      <HourlyItems />
      <TopHourlyCats />
    </div>
  );
};

export default Hourly;
