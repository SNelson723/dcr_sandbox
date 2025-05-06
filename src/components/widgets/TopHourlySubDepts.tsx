/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getTopHourlySubDepts } from "../../api/hourly";
import { setSubDepts } from "../../features/hourlySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { HourlySubDept, JsonError } from "../../types";
import { colors, formatCurrency } from "../../utils";
import GraphBar from "./GraphBar";

const TopHourlySubDepts = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
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
    getTopHourlySubDepts(url, "5/5/2025", "11")
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          console.log(j);
          const sorted: HourlySubDept[] = j.subdepts.sort(
            (a: HourlySubDept, b: HourlySubDept) =>
              parseFloat(b.f65) - parseFloat(a.f65)
          );
          dispatch(setSubDepts(sorted));
        }
      })
      .catch((e: JsonError) => console.error(e.message));
  };

  return (
    <>
      {subdepts.length && total > 0 ? (
        <div className="bg-white text-slate-900 p-4 rounded-lg shadow-lg animate-fadeIn">
          <div className="flex justify-between items-center mb-4 font-semibold border-b border-b-black">
            <div>Houchens 001</div>
            <div>5/5/2025</div>
            <div>Hour: 11</div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {subdepts.map((dept, i) => (
              <div
                className="grid grid-cols-[1fr_3fr_1fr_0.5fr] gap-2 items-center"
                key={`dept_${i}`}
              >
                {/* label */}
                <div className="text-sm text-right">{dept.f1022}</div>
                {/* bar container */}
                <GraphBar
                  current={parseFloat(dept.f65)}
                  max={total}
                  className={`${colors[i]}`}
                />
                {/* total sales */}
                <div className="text-right">{formatCurrency(dept.f65)}</div>
                {/* qty */}
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
