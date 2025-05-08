import Tables from "./Tables";
import Carousel from "../../components/Carousel";
import Fields from "./Fields";
import Hourly from "../Hourly";

const StudyGuide = () => {
  return (
    <div className="h-full mt-20">
      <div className="text-black">
        <Carousel>
          <Hourly title="Hourly Sales" />
          <Tables title="Tables Guide" />
          <Fields title="Fields Guide" />
        </Carousel>
      </div>
    </div>
  );
};

export default StudyGuide;
