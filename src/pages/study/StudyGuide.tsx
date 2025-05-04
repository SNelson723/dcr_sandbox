import { useEffect } from "react";
import { getTables } from "../../api/tables";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setTables } from "../../features/tableSlice";
import Tables from "./Tables";
import Carousel from "../../components/Carousel";
import Fields from "./Fields";

const StudyGuide = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);

  useEffect(() => {
    getTables(url)
      .then((resp) => {
        const j = resp.data;
        console.log(j);
        if (j.error === 0) {
          dispatch(setTables(j.tables));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="text-xl my-10 font-semibold">Study Guide page</div>

      {/* Carousel practice */}
      <div className="text-black">
        <Carousel>
          <Tables title="Tables Guide" />
          <Fields title="Fields Guide" />
        </Carousel>
      </div>
    </div>
  );
};

export default StudyGuide;
