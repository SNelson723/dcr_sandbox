import { useEffect } from "react";
import { getTables } from "../../api/tables";
import { setTables } from "../../features/tableSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

type Props = {
  title?: string;
};
const Tables = ({ title = "Tables" }: Props) => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);

  useEffect(() => {
    getTables(url)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setTables(j.tables));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full border-slate-50 rounded-lg">
      <h1 className="text-2xl font-bold text-slate-50">{title}</h1>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-slate-50">This is the tables slide</p>
      </div>
    </div>
  );
};

export default Tables;
