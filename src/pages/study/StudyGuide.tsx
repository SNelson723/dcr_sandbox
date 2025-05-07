import Tables from "./Tables";
import Carousel from "../../components/Carousel";
import Fields from "./Fields";
import Hourly from "../Hourly";

const StudyGuide = () => {
  return (
    <div className="h-full">
      <div className="text-xl my-10 font-semibold">Study Guide page</div>

      {/* Carousel practice */}
      <div className="text-black">
        <Carousel>
          <Tables title="Tables Guide" />
          <Fields title="Fields Guide" />
          <Hourly title="Hourly Sales" />
        </Carousel>
      </div>
    </div>
  );
};

export default StudyGuide;
