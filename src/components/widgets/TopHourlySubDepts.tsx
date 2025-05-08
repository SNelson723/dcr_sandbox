import { useEffect, useState } from "react";
import { getTopHourlySubDepts } from "../../api/hourly";
import {
  setPortalTitle,
  setPortalType,
  setSelectedSubDept,
  setShowPortal,
  setSubDepts,
} from "../../features/hourlySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { HourlySubDept, JsonError } from "../../types";
import { formatCurrency } from "../../utils";
import GraphBar from "./GraphBar";

const TopHourlySubDepts = () => {
  const dispatch = useAppDispatch();
  const { url, date, selectedHour } = useAppSelector((state) => state.app);
  const { subdepts } = useAppSelector((state) => state.hourly);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (subdepts.length > 0) {
      setTotal(subdepts.reduce((acc, dept) => acc + parseFloat(dept.f65), 0));
    }
  }, [subdepts]);

  const getData = () => {
    getTopHourlySubDepts(url, date, selectedHour)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          const sorted: HourlySubDept[] = j.subdepts.sort(
            (a: HourlySubDept, b: HourlySubDept) =>
              parseFloat(b.f65) - parseFloat(a.f65)
          );
          dispatch(setSubDepts(sorted));
        }
      })
      .catch((e: JsonError) => console.error(e.message));
  };

  const openPortal = (dept: string, id: string) => {
    dispatch(setSelectedSubDept(id));
    dispatch(setPortalType("Sub Dept"));
    dispatch(setPortalTitle(dept));
    dispatch(setShowPortal(true));
  };

  return (
    <>
      {subdepts.length && total > 0 ? (
        <div className="bg-white text-slate-900 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4 font-semibold border-b border-b-black">
            <div>Sub Dept</div>
            <div>5/5/2025</div>
            <div>Hour: 11</div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {subdepts.map((dept, i) => (
              <div
                className="grid grid-cols-[50px_120px_1fr_35px] gap-2 items-center"
                key={`dept_${i}`}
              >
                <div
                  className="text-sm text-right cursor-pointer"
                  onClick={() => openPortal(dept.f1022, dept.f04)}
                >
                  {dept.f1022}
                </div>
                <GraphBar
                  current={parseFloat(dept.f65)}
                  max={total}
                  className={`bg-blue-500`}
                  widget="subdept"
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

export default TopHourlySubDepts;
