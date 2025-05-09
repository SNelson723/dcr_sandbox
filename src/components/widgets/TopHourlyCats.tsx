import { getTopHourlyCats } from "../../api/hourly";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCats } from "../../features/hourlySlice";
import { JsonError } from "../../types";
import { formatCurrency } from "../../utils";

const TopHourlyCats = () => {
  const dispatch = useAppDispatch();
  const { url, date, selectedHour } = useAppSelector((state) => state.app);
  const { cats } = useAppSelector((state) => state.hourly);
  const [total, setTotal] = useState<number>(0);

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 820;

  useEffect(() => {
    getTopHourlyCats(url, date, selectedHour)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setCats(j.hc));
        }
      })
      .catch((e: JsonError) => console.log(e.message));
  }, []);

  useEffect(() => {
    if (cats.length === 0) return;
    const totalValue = cats.reduce((acc, cat) => acc + parseFloat(cat.f65), 0);
    setTotal(totalValue);
  }, [cats]);

  const getClampedPercent = (val: number) => {
    if (total <= 0) return 0;
    const percent = (Math.max(0, Math.min(val, total)) / total) * 100;
    const result = Math.min(100, Math.max(0, percent));
    return `${result.toFixed(2)}%`;
  };

  return (
    <div className={`${isMobile ? "" : "col-span-3"} rounded-lg shadow-lg bg-white text-black p-4`}>
      <div className="mb-2 font-semibold  border-b border-b-black">
        Categories
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {cats.map((cat, i) => (
          <div className="rounded-lg shadow-lg" key={`cat_${i}`}>
            <div className="border-b flex justify-between items-center py-1 px-3">
              <div className="text-sm">{cat.f1023}</div>
              <div className="text-sm text-center">Qty: {cat.f64}</div>
            </div>
            <div className="text-lg text-center font-semibold">
              {formatCurrency(cat.f65)}
            </div>
            <div className="text-center">
              {getClampedPercent(parseFloat(cat.f65))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHourlyCats;
