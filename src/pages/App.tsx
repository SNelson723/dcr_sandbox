import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
// import { getDashboard } from "../api/dashboard";
import { useAppSelector } from "../hooks";
// import { setEmbedUrl } from "../features/appSlice";

const App = () => {
  const { awsUrl, arn, dashId } = useAppSelector((state) => state.app);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // getDashboard(awsUrl, arn).then((resp) => {
    //   const j = resp.data;
    //   dispatch(setEmbedUrl(j.embed_url));
    // });
  } , [awsUrl, arn, dashId]);

  return (
    <div className="w-screen h-screen bg-slate-500 ">
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
