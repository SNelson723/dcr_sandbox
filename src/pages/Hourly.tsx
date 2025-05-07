import TopHourlyCats from "../components/widgets/TopHourlyCats";
import TopHourlyDepts from "../components/widgets/TopHourlyDepts";
import TopHourlySubDepts from "../components/widgets/TopHourlySubDepts";
import TopHourlyTenders from "../components/widgets/TopHourlyTenders";

const Hourly = () => {
  return (
    <div className="py-4 mt-4 grid grid-cols-2 gap-2 items-center justify-center">
      <TopHourlyDepts />
      <TopHourlySubDepts />
      <TopHourlyCats />
      <TopHourlyTenders />
    </div>
  );
};

export default Hourly;
