import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-500 text-slate-50">
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
