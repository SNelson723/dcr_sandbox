/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setDepts } from "../features/hourlySlice";
import { getTopHourlyDepts } from "../api/hourly";
import { JsonError } from "../types";

const TopHourlyDepts = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
  const { depts } = useAppSelector((state) => state.hourly);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getTopHourlyDepts(url, "5/5/2025", "11")
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          console.log(j);
          dispatch(setDepts(j.depts));
        }
      })
      .catch((e: JsonError) => console.error(e.message));
  };

  return (
    <div>
      <div>
        {depts.map((dept, i) => (
          <div>
            <h3 key={i}>{dept.f65}</h3>
            <p>{dept.f64}</p>
            <p>{dept.f03}</p>
            <p>{dept.f238}</p>
            <p>{dept.f254}</p>
            <p>{dept.hour}</p>
            <p>{dept.f1056}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hourly = () => {
  return (
    <div>
      <div>
        <TopHourlyDepts />
      </div>
    </div>
  );
};

export default Hourly;
