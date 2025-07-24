import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
// import { getDashboard } from "../api/dashboard";
import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
import { getSubSales, getDateSales } from "../api/charts";
import { setSubSales, setDateSales } from "../features/chartSlice";
import { JsonError } from "../types";
// import { setEmbedUrl } from "../features/appSlice";
// import { setDateSales, setSubSales } from "../features/chartSlice";

const App = () => {
  const { awsUrl, arn, dashId, devUrl } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getDashboard(awsUrl, arn).then((resp) => {
    //   const j = resp.data;
    //   dispatch(setEmbedUrl(j.embed_url));
    // });
    getSubSales(devUrl)
      .then((resp) => {
        const j = resp.data;
        if (j.error == 0) {
          console.log(j.sales)
          dispatch(setSubSales(j.sales));
        }
      })
      .catch((err: JsonError) => {
        console.error("Error fetching sub sales:", err.message);
      });

    getDateSales(devUrl)
      .then((resp) => {
        const j = resp.data;
        if (j.error == 0) {
          const copy = [...j.sales].map((sale) => {
            return {
              ...sale,
              sale_date: sale.sale_date.split("T")[0],
            };
          });
          dispatch(setDateSales(copy));
        }
      })
      .catch((err: JsonError) => {
        console.error("Error fetching date sales:", err.message);
      });
  }, [awsUrl, arn, dashId]);

  return (
    <div className="w-screen h-screen bg-slate-500">
      <div className="w-full flex flex-col items-center">
        <NavBar />
        <div className="flex-1 justify-center align-center place-items-center h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
