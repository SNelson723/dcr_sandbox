import { getTopHourlyCats } from "../../api/hourly";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCats } from "../../features/hourlySlice";
import { JsonError } from "../../types";
import { formatCurrency } from "../../utils";

const TopHourlyCats = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
  const { cats } = useAppSelector((state) => state.hourly);

  useEffect(() => {
    getTopHourlyCats(url, "5/5/2025", "11")
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setCats(j.hc));
        }
      })
      .catch((e: JsonError) => console.log(e.message));
  }, []);

  return (
    <div className="rounded-lg shadow-lg divide-y divide-black">
      <div className="bg-blue-500 text-white grid grid-cols-3 rounded-t-lg">
        <div className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
          Category
        </div>
        <div className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
          Sales
        </div>
        <div className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
          Count
        </div>
      </div>
      <div className="bg-white divide-y divide-black max-h-52 overflow-y-auto rounded-b-lg no-scrollbar">
        {/* Map through the data and create div rows */}
        {cats.map((cat, i) => (
          <div
            key={`cat_${i}`}
            className="odd:bg-white even:bg-blue-200 grid grid-cols-3"
          >
            <div className="px-4 py-1 whitespace-nowrap text-sm text-gray-900">
              {cat.f1023}
            </div>
            <div className="px-4 py-1 whitespace-nowrap text-sm text-gray-900">
              {formatCurrency(cat.f65)}
            </div>
            <div className="px-4 py-1 whitespace-nowrap text-sm text-gray-900">
              {cat.f64}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHourlyCats;
