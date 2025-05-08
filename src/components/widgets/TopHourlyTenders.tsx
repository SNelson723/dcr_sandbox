import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setTenders } from "../../features/hourlySlice";
import { getTopHourlyTenders } from "../../api/hourly";
import { JsonError } from "../../types";

const colors = [
  "var(--color-blue)",
  "var(--color-light-blue)",
  "var(--color-green)",
  "var(--color-light-green)",
  "var(--color-orange)",
  "var(--color-light-orange)",
];

const TopHourlyTenders = () => {
  const dispatch = useAppDispatch();
  const { url, date, selectedHour } = useAppSelector((state) => state.app);
  const { tenders } = useAppSelector((state) => state.hourly);
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    getTopHourlyTenders(url, date, selectedHour)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setTenders(j.tenders));
        }
      })
      .catch((e: JsonError) => console.log(e.message));
  }, [dispatch, url]);

  useEffect(() => {
    if (!tenders || tenders.length === 0) return;

    const chartData = tenders.slice(0, 5).map((tender, idx) => ({
      name: tender.f1041 || `Cluster ${idx + 1}`,
      value: parseInt(tender.qty, 10) || 0,
      color: colors[idx % colors.length],
    }));

    const total = chartData.reduce((acc, cur) => acc + cur.value, 0);
    if (total === 0) return;

    let startDeg = 0;
    const slices = chartData.map((item) => {
      const deg = (item.value / total) * 360;
      const slice = `${item.color} ${startDeg}deg ${startDeg + deg}deg`;
      startDeg += deg;
      return slice;
    });

    setCss(slices.join(", "));
  }, [tenders]);

  return (
    <>
      {css && (
        <div className="rounded-lg shadow-lg  bg-white text-black p-4">
          <div className="mb-2 font-semibold text-center border-b border-b-black">
            Tenders
          </div>
          <div className="flex my-4">
            <div
              className="w-[150px] h-[150px] mr-2 rounded-full"
              style={{
                background: `conic-gradient(${css})`,
              }}
            ></div>
            <div className="md:flex-col md:items-center md:justify-center w-1/2 cursor-default">
              {tenders.map((tender, i) => (
                <div key={i} className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <div
                      className="w-[20px] h-[20px] rounded-full"
                      style={{
                        backgroundColor: colors[i % colors.length],
                      }}
                    ></div>
                    <div className="ml-2">{tender.f1041}</div>
                  </div>
                  <div>{tender.qty}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopHourlyTenders;
