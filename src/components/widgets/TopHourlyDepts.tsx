import { useEffect, useState } from "react";
import { getTopHourlyDepts } from "../../api/hourly";
import {
  setDepts,
  setPortalTitle,
  setPortalType,
  setSelectedDept,
  setShowPortal,
} from "../../features/hourlySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { HourlyDept, JsonError } from "../../types";
import { formatCurrency } from "../../utils";
import GraphBar from "./GraphBar";

const TopHourlyDepts = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
  const { depts } = useAppSelector((state) => state.hourly);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (depts.length > 0) {
      setTotal(depts.reduce((acc, dept) => acc + parseFloat(dept.f65), 0));
    }
  }, [depts]);

  const getData = () => {
    getTopHourlyDepts(url, "5/8/2025", "10")
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          const sorted: HourlyDept[] = j.depts.sort(
            (a: HourlyDept, b: HourlyDept) =>
              parseFloat(b.f65) - parseFloat(a.f65)
          );
          dispatch(setDepts(sorted));
        }
      })
      .catch((e: JsonError) => console.error(e.message));
  };

  const openPortal = (dept: string, id: string) => {
    dispatch(setSelectedDept(id))
    dispatch(setPortalType("Dept"));
    dispatch(setPortalTitle(dept));
    dispatch(setShowPortal(true));
  };

  return (
    <>
      {depts.length && total > 0 ? (
        <div className="bg-white text-slate-900 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4 font-semibold border-b border-b-black">
            <div>Dept</div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {depts.map((dept, i) => (
              <div
                className="grid grid-cols-[50px_120px_1fr_35px] gap-2 items-center"
                key={`dept_${i}`}
              >
                <div
                  className="text-sm text-right cursor-pointer"
                  onClick={() => openPortal(dept.f238, dept.f03)}
                >
                  {dept.f238}
                </div>
                <GraphBar
                  current={parseFloat(dept.f65)}
                  max={total}
                  className={`bg-emerald-500`}
                />
                <div className="text-right">{formatCurrency(dept.f65)}</div>
                <div className="text-right">{dept.f64}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TopHourlyDepts;
