import Tables from "./Tables";
import Carousel from "../../components/Carousel";
import Fields from "./Fields";
import Hourly from "../Hourly";
import HourlyItems from "../../components/widgets/HourlyItems";
import TopHourlyCats from "../../components/widgets/TopHourlyCats";
import TopHourlyDepts from "../../components/widgets/TopHourlyDepts";
import TopHourlySubDepts from "../../components/widgets/TopHourlySubDepts";
import TopHourlyTenders from "../../components/widgets/TopHourlyTenders";

const StudyGuide = () => {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 820;

  return (
    <div className="h-full mt-10 md:mt-12 scrollbar-none ">
      <div className="text-black">
        {!isMobile ? (
          <Carousel
            className="relative md:max-w-[85vw] overflow-hidden min-h-[80vh]"
            btnDivClassName="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 mb-4 flex gap-2"
          >
            <Hourly title="Hourly Sales" />
            <Tables title="Tables Quiz" />
            <Fields title="Fields Quiz" />
          </Carousel>
        ) : (
          <Carousel
            className="relative overflow-hidden min-h-[60vh] mx-4 rounded-lg"
            btnDivClassName="absolute left-1/2 z-50 -translate-x-1/2 translate-y-6 mb-4 flex gap-2"
          >
            <div className="grid grid-cols-1 max-h-[50vh] overflow-y-scroll gap-2 no-scrollbar">
              <TopHourlyDepts />
              <TopHourlySubDepts />
              <TopHourlyTenders />
            </div>
            <div className="grid grid-cols-1 max-h-[50vh] overflow-y-scroll gap-2 no-scrollbar">
              <HourlyItems />
              <TopHourlyCats />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default StudyGuide;
