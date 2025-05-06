import TopHourlyDepts from "../components/widgets/TopHourlyDepts";
import TopHourlySubDepts from "../components/widgets/TopHourlySubDepts";

const Hourly = () => {
  return (
    <div className="py-4 mt-4 grid grid-cols-2 gap-2 items-center justify-center">
      <TopHourlyDepts />
      <TopHourlySubDepts />
    </div>
  );
};

export default Hourly;
