import { useEffect } from "react";
import { getTopHourlyDepts } from "../../api/hourly";
import { setDepts } from "../../features/hourlySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { HourlyDept, JsonError } from "../../types";
import { colors, formatCurrency } from "../../utils";

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
          const sorted: HourlyDept[] = j.depts.sort((a: HourlyDept, b: HourlyDept) => parseFloat(b.f65) - parseFloat(a.f65));
          dispatch(setDepts(sorted));
        }
      })
      .catch((e: JsonError) => console.error(e.message));
  };

  const calculateWidth = (value: string) => {
    const num = parseFloat(value);
    const total = depts.reduce((acc, dept) => acc + parseFloat(dept.f65), 0);
    const percentage = (num / total) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="bg-white text-slate-900 p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4 font-semibold border-b border-b-black">
        <div>Houchens 001</div>
        <div>5/5/2025</div>
        <div>Hour: 11</div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {depts.map((dept, i) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr_0.5fr] gap-2 items-center"
            key={`dept_${i}`}
          >
            {/* label */}
            <div className="text-sm text-right">{dept.f238}</div>
            {/* bar container */}
            <div className={`w-full`}>
              {/* actual bar */}
              <div className={`${colors[i]} h-8 rounded-lg`} style={{width: calculateWidth(dept.f65)}}></div>
            </div>
            {/* total sales */}
            <div className="text-right">{formatCurrency(dept.f65)}</div>
            {/* qty */}
            <div className="text-right">{dept.f64}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHourlyDepts;