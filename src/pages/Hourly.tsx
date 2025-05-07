import TopHourlyCats from "../components/widgets/TopHourlyCats";
import TopHourlyDepts from "../components/widgets/TopHourlyDepts";
import TopHourlySubDepts from "../components/widgets/TopHourlySubDepts";
import TopHourlyTenders from "../components/widgets/TopHourlyTenders";
import HourlyItems from "../components/widgets/HourlyItems";

interface HourlyProps {
  title?: string;
}

const Hourly = ({ title }: HourlyProps) => {
  return (
    <div className="grid grid-cols-4 gap-2 items-center justify-center">
      <TopHourlyDepts />
      <TopHourlySubDepts />
      <TopHourlyTenders />
      <HourlyItems />
      <TopHourlyCats />
    </div>
  );
};

export default Hourly;
