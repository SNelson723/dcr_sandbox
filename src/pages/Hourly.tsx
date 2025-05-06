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
    <div className="bg-slate-50 text-slate-900 p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        {depts.map((dept, i) => (
          <div className="bg-white rounded-lg shadow-lg px-4 py-2">
            <p key={i}>{dept.f65}</p>
            <p>{dept.f64}</p>
            <p>{dept.f238}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hourly = () => {
  return (
    <div className="py-4">
      <TopHourlyDepts />
    </div>
  );
};

export default Hourly;
